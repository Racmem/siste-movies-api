const { schemaForValidation } = require('../../../test/helpers/schemas/schema_for_validation');
const { validateSchema } = require('./schema_validator');
const { middlewareTester } = require('../../../test/utils/utils');

const errorBodyEmpty = {
  message: {
    errors: [
      { msg: 'The key stringField must be string', param: 'stringField', location: 'body' },
      { value: '', msg: 'The key stringField must be exist', param: 'stringField', location: 'body' }
    ]
  },
  internalCode: 'SCHEMA_ERROR'
};

const errorIncorrectBody = {
  message: {
    errors: [
      { value: 123456, msg: 'The key stringField must be string', param: 'stringField', location: 'body' }
    ]
  },
  internalCode: 'SCHEMA_ERROR'
};

const reqBuilder = stringField => {
  const req = { body: {} };
  if (stringField) {
    req.body.stringField = stringField;
  }
  return req;
};

describe('Schema validator success', () => {
  const nextSpy = jest.fn();
  afterEach(() => nextSpy.mockClear());
  it('should success', async () => {
    const req = reqBuilder('this is a valid string');
    let middleware = validateSchema({ schema: schemaForValidation });
    middleware = [middleware[0][0], middleware[1]];
    await middlewareTester(req, null, middleware, nextSpy);
    expect(nextSpy).toHaveBeenCalledTimes(2);
    expect(nextSpy.mock.calls[1].length).toBe(0);
  });
});

describe('Schema validator failed', () => {
  const nextSpy = jest.fn();
  let middleware = [];
  beforeEach(() => {
    nextSpy.mockReset();
    middleware = validateSchema({ schema: schemaForValidation });
    middleware = [...middleware[0], middleware[1]];
  });
  it('should fail when body is empty', async () => {
    const req = reqBuilder();
    await middlewareTester(req, null, middleware, nextSpy);
    expect(nextSpy).toHaveBeenCalledTimes(2);
    expect(nextSpy.mock.calls[1][0].message.errors).toEqual(errorBodyEmpty.message.errors);
  });
  it('should fail when body has incorrect data type', async () => {
    const req = reqBuilder(123456);
    await middlewareTester(req, null, middleware, nextSpy);
    expect(nextSpy).toHaveBeenCalledTimes(2);
    expect(nextSpy.mock.calls[1][0].message.errors).toEqual(errorIncorrectBody.message.errors);
  });
});
