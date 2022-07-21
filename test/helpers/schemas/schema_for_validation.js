const { typeError, keyNotExist } = require('../errors');

exports.schemaForValidation = {
  stringField: {
    in: ['body'],
    isString: { errorMessage: typeError({ key: 'stringField', type: 'string' }) },
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: keyNotExist('stringField')
    }
  }
};
