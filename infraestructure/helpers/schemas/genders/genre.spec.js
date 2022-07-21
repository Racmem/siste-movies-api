const { checkSchema, validationResult } = require('express-validator');
const { middlewareTester } = require('../../../../test/utils/utils');
const { getGenre } = require('./genre');

const buildParamsQuery = id => ({
  params: { id }
});

describe('', () => {
  describe('Get Movie Details Schema', () => {
    it('Should be fail when params has incorrect values', async () => {
      const req = buildParamsQuery('ABC123');
      await middlewareTester(req, null, checkSchema(getGenre), () => undefined);
      const errors = validationResult(req).array();
      expect(errors.length).toBe(1);
      expect(errors[0].msg).toBe('The key id must be int');
    });
    it('Should be fail when params has no values', async () => {
      const req = buildParamsQuery(1);
      delete req.params.id;
      await middlewareTester(req, null, checkSchema(getGenre), () => undefined);
      const errors = validationResult(req).array();
      expect(errors.length).toBe(1);
      expect(errors[0].msg).toBe('The key id must be exist');
    });
    it('Should be success when params has correct values', async () => {
      const req = buildParamsQuery(1);
      await middlewareTester(req, null, checkSchema(getGenre), () => undefined);
      const errors = validationResult(req).array();
      expect(errors.length).toBe(0);
    });
  });
});
