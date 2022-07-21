const { handle } = require('./errors');

describe('Middleware errors', () => {
  describe('Process error successfully', () => {
    const errorInput = {
      internalCode: 'DEFAULT_ERROR'
    };
    const resMock = {
      status: jest.fn(),
      send: jest.fn()
    };
    beforeAll(() => {
      handle(errorInput, null, resMock);
    });
    it('The error error must be processed successfully calling one time res.status()', () => {
      expect(resMock.status).toHaveBeenCalledTimes(1);
    });
    it('The error error must be processed successfully calling one time res.send()', () => {
      expect(resMock.send).toHaveBeenCalledTimes(1);
    });
  });
  describe('Process error successfully whe internal code error not be registered in the catalog of errors', () => {
    const errorInput = {
      internalCode: 'OTHER_ERROR'
    };
    const resMock = {
      status: jest.fn(),
      send: jest.fn()
    };
    beforeAll(() => {
      handle(errorInput, null, resMock);
    });
    it('The error error must be processed successfully calling one time res.status()', () => {
      expect(resMock.status).toHaveBeenCalledTimes(1);
    });
    it('The error error must be processed successfully calling one time res.send()', () => {
      expect(resMock.send).toHaveBeenCalledTimes(1);
    });
  });
  describe('Process error successfully when unknown error be passed to middleware', () => {
    let error = {};
    const errorInput = {};
    const resMock = {
      status: jest.fn(),
      send: jest.fn()
    };
    beforeAll(() => {
      handle(errorInput, null, resMock, err => {
        error = err;
      });
    });
    it('The error must be processed calling next(err) for pass to rollbar', () => {
      expect(error).toBeDefined();
    });
    it('The error error must be processed successfully calling one time res.status()', () => {
      expect(resMock.status).toHaveBeenCalledTimes(1);
    });
    it('The error error must be processed successfully calling one time res.send()', () => {
      expect(resMock.send).toHaveBeenCalledTimes(1);
    });
  });
});
