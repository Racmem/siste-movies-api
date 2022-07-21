const { keyNotExist, typeError } = require('../../../../application/errors');

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

exports.getFilmRating = { id };
