const { typeError, keyNotExist, dateSchemaType } = require('../../../../application/errors');

const id = {
  in: ['params'],
  trim: true,
  custom: {
    options: (value, { req }) =>
      new Promise((resolve, reject) => {
        if (req.params.id === undefined || req.params.id === null || req.params.id === '') {
          reject(keyNotExist('id'));
        }
        if (!Number(value)) {
          reject(typeError({ key: 'id', type: 'int' }));
        }
        resolve(value);
      })
  }
};

const name = {
  in: ['body'],
  isString: { errorMessage: typeError({ key: 'name', type: 'string' }) },
  trim: true,
  isEmpty: { negated: true, errorMessage: keyNotExist('name') }
};

const release_date = {
  in: ['body'],
  isString: { errorMessage: typeError({ key: 'release_date', type: 'string' }) },
  trim: true,
  isEmpty: { negated: true, errorMessage: keyNotExist('release_date') },
  custom: {
    options: (value, { req }) =>
      new Promise((resolve, reject) => {
        const regex_date = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex_date.test(req.body.release_date)) {
          reject(dateSchemaType('release_date'));
        }
        resolve(value);
      })
  }
};

const film_rating_id = {
  in: ['body'],
  trim: true,
  isEmpty: { negated: true, errorMessage: keyNotExist('film_rating_id') },
  custom: {
    options: (value, { req }) =>
      new Promise((resolve, reject) => {
        if (!Number(req.body.film_rating_id)) {
          reject(typeError({ key: 'film_rating_id', type: 'int' }));
        }
        resolve(value);
      })
  }
};

const amount = {
  in: ['body'],
  trim: true,
  isEmpty: { negated: true, errorMessage: keyNotExist('amount') },
  custom: {
    options: (value, { req }) =>
      new Promise((resolve, reject) => {
        if (!Number(req.body.amount)) {
          reject(typeError({ key: 'amount', type: 'int' }));
        }
        resolve(value);
      })
  }
};

const price = {
  in: ['body'],
  trim: true,
  isEmpty: { negated: true, errorMessage: keyNotExist('price') },
  custom: {
    options: (value, { req }) =>
      new Promise((resolve, reject) => {
        if (!Number(req.body.price)) {
          reject(typeError({ key: 'price', type: 'float' }));
        }
        resolve(value);
      })
  }
};

const genders = {
  in: ['body'],
  custom: {
    options: (value, { req }) =>
      new Promise((resolve, reject) => {
        if (!Array.isArray(req.body.genders)) {
          reject(typeError({ key: 'genders', type: 'array' }));
        }
        if (req.body.genders.length === 0) {
          reject(keyNotExist('genders'));
        }
        if (req.body.genders.some(genre => typeof genre !== 'number')) {
          reject(typeError({ key: 'genders', type: 'array-int' }));
        }
        resolve(value);
      })
  }
};

exports.createMovieSchema = { name, release_date, film_rating_id, amount, price, genders };

exports.getMovieSchema = { id };

exports.updateMovieSchema = { id, name, release_date, film_rating_id, amount, price, genders };

exports.deleteMovieSchema = { id };
