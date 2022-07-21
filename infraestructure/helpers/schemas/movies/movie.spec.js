const { checkSchema, validationResult } = require('express-validator');
const { middlewareTester } = require('../../../../test/utils/utils');
const { createMovieSchema, updateMovieSchema, getMovieSchema, deleteMovieSchema } = require('./movie');

const buildReqBody = (
  name = '',
  release_date = '',
  film_rating_id = null,
  amount = 0,
  price = 0,
  genders = []
  // eslint-disable-next-line max-params
) => ({
  body: {
    name,
    release_date,
    film_rating_id,
    amount,
    price,
    genders
  }
});

const buildParamsQuery = id => ({
  params: { id }
});

describe('Movie Schema', () => {
  describe('Create Movie Schema fails', () => {
    it('Should fail when body is empty', async () => {
      const req = {
        body: {}
      };
      await middlewareTester(req, null, checkSchema(createMovieSchema), () => undefined);
      const errors = validationResult(req).array();
      expect(errors.length).toEqual(12);
      expect(errors[0].msg).toEqual('The key name must be string');
      expect(errors[1].msg).toEqual('The key name must be exist');
      expect(errors[2].msg).toEqual('The key release_date must be string');
      expect(errors[3].msg).toEqual('The key release_date must be exist');
      expect(errors[4].msg).toEqual('The key release_date must have date schema');
      expect(errors[5].msg).toEqual('The key film_rating_id must be exist');
      expect(errors[6].msg).toEqual('The key film_rating_id must be int');
      expect(errors[7].msg).toEqual('The key amount must be exist');
      expect(errors[8].msg).toEqual('The key amount must be int');
      expect(errors[9].msg).toEqual('The key price must be exist');
      expect(errors[10].msg).toEqual('The key price must be float');
      expect(errors[11].msg).toEqual('The key genders must be array');
    });
    it('Should fail when body has incorrect type values', async () => {
      const req = buildReqBody(10, 'fake date', true, 12, 45, [1, 2]);
      await middlewareTester(req, null, checkSchema(createMovieSchema), () => undefined);
      const errors = validationResult(req).array();
      expect(errors.length).toBe(3);
      expect(errors[0].msg).toBe('The key name must be string');
      expect(errors[1].msg).toBe('The key release_date must have date schema');
      expect(errors[2].msg).toBe('The key film_rating_id must be int');
    });
    it('Should fail when body has no name, release_date, film_rating_id, amount, price or genders', async () => {
      const req = buildReqBody(null, 'example@example.com', '45677');
      delete req.body.name;
      await middlewareTester(req, null, checkSchema(createMovieSchema), () => undefined);
      const errors = validationResult(req).array();
      expect(errors.length).toBe(6);
      expect(errors[0].msg).toBe('The key name must be string');
      expect(errors[1].msg).toBe('The key name must be exist');
      expect(errors[2].msg).toBe('The key release_date must have date schema');
      expect(errors[3].msg).toBe('The key amount must be int');
    });
  });
  describe('Create Movie Schema success', () => {
    it('Should success when body has all correct values', async () => {
      const req = buildReqBody('Movie', '2022-07-20', 1, 5, 20, [1, 2]);
      await middlewareTester(req, null, checkSchema(createMovieSchema), () => undefined);
      const errors = validationResult(req).array();
      expect(errors.length).toBe(0);
    });
  });

  describe('Update Movie Schema fails', () => {
    it('Should fail when body is empty', async () => {
      const req = {
        body: {},
        params: {}
      };
      await middlewareTester(req, null, checkSchema(updateMovieSchema), () => undefined);
      const errors = validationResult(req).array();
      expect(errors.length).toEqual(13);
      expect(errors[0].msg).toEqual('The key id must be exist');
      expect(errors[1].msg).toEqual('The key name must be string');
      expect(errors[2].msg).toEqual('The key name must be exist');
      expect(errors[3].msg).toEqual('The key release_date must be string');
      expect(errors[4].msg).toEqual('The key release_date must be exist');
      expect(errors[5].msg).toEqual('The key release_date must have date schema');
      expect(errors[6].msg).toEqual('The key film_rating_id must be exist');
      expect(errors[7].msg).toEqual('The key film_rating_id must be int');
      expect(errors[8].msg).toEqual('The key amount must be exist');
      expect(errors[9].msg).toEqual('The key amount must be int');
      expect(errors[10].msg).toEqual('The key price must be exist');
      expect(errors[11].msg).toEqual('The key price must be float');
      expect(errors[12].msg).toEqual('The key genders must be array');
    });
    it('Should fail when body has incorrect type values', async () => {
      const req = buildReqBody(10, 'fake date', true, '12', 45, [1, 2]);
      req.params = {};
      await middlewareTester(req, null, checkSchema(updateMovieSchema), () => undefined);
      const errors = validationResult(req).array();
      expect(errors.length).toBe(4);
      expect(errors[0].msg).toBe('The key id must be exist');
      expect(errors[1].msg).toBe('The key name must be string');
      expect(errors[2].msg).toBe('The key release_date must have date schema');
      expect(errors[3].msg).toBe('The key film_rating_id must be int');
    });
    it('Should fail when body has no name, release_date, film_rating_id, amount, price or genders', async () => {
      const req = buildReqBody(null, 'example@example.com', '45677', 8);
      req.params = {};
      delete req.body.name;
      await middlewareTester(req, null, checkSchema(updateMovieSchema), () => undefined);
      const errors = validationResult(req).array();
      expect(errors.length).toBe(6);
      expect(errors[0].msg).toBe('The key id must be exist');
      expect(errors[1].msg).toBe('The key name must be string');
      expect(errors[2].msg).toBe('The key name must be exist');
      expect(errors[3].msg).toBe('The key release_date must have date schema');
      expect(errors[4].msg).toBe('The key price must be float');
    });
  });
  describe('Update Movie Schema success', () => {
    it('Should success when body has all correct values', async () => {
      const req = buildReqBody('Movie', '2022-07-20', 1, 5, 20, [1, 2]);
      req.params = { id: 1 };
      await middlewareTester(req, null, checkSchema(updateMovieSchema), () => undefined);
      const errors = validationResult(req).array();
      expect(errors.length).toBe(0);
    });
  });

  describe('Get Movie Details Schema', () => {
    it('Should be fail when params has incorrect values', async () => {
      const req = buildParamsQuery('ABC123');
      await middlewareTester(req, null, checkSchema(getMovieSchema), () => undefined);
      const errors = validationResult(req).array();
      expect(errors.length).toBe(1);
      expect(errors[0].msg).toBe('The key id must be int');
    });
    it('Should be fail when params has no values', async () => {
      const req = buildParamsQuery(1);
      delete req.params.id;
      await middlewareTester(req, null, checkSchema(getMovieSchema), () => undefined);
      const errors = validationResult(req).array();
      expect(errors.length).toBe(1);
      expect(errors[0].msg).toBe('The key id must be exist');
    });
    it('Should be success when params has correct values', async () => {
      const req = buildParamsQuery(1);
      await middlewareTester(req, null, checkSchema(getMovieSchema), () => undefined);
      const errors = validationResult(req).array();
      expect(errors.length).toBe(0);
    });
  });

  describe('Delete Movie Schema', () => {
    it('Should be fail when params has no values', async () => {
      const req = buildParamsQuery(null);
      await middlewareTester(req, null, checkSchema(deleteMovieSchema), () => undefined);
      const errors = validationResult(req).array();
      expect(errors.length).toBe(1);
      expect(errors[0].msg).toBe('The key id must be exist');
    });
    it('Should be fail when params has incorrect values', async () => {
      const req = buildParamsQuery('string param');
      await middlewareTester(req, null, checkSchema(deleteMovieSchema), () => undefined);
      const errors = validationResult(req).array();
      expect(errors.length).toBe(1);
      expect(errors[0].msg).toBe('The key id must be int');
    });
    it('Should be success when params has correct values', async () => {
      const req = buildParamsQuery(1);
      await middlewareTester(req, null, checkSchema(deleteMovieSchema), () => undefined);
      const errors = validationResult(req).array();
      expect(errors.length).toBe(0);
    });
  });
});
