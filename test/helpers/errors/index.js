const internalError = (message, internalCode) => ({
  message,
  internalCode
});

exports.SCHEMA_ERROR = 'SCHEMA_ERROR';
exports.UNAUTHORIZED = 'UNAUTHORIZED';
exports.BAD_REQUEST = 'BAD_REQUEST';
exports.SERVER_ERROR = 'SERVER_ERROR';

exports.keyNotExist = key => `The key ${key} must be exist`;
exports.typeError = ({ key, type }) => `The key ${key} must be ${type}`;
exports.schemaError = message => internalError(message, exports.SCHEMA_ERROR);
exports.unauthorized = message => internalError(message, exports.UNAUTHORIZED);
exports.serverError = message => internalError(message, exports.SERVER_ERROR);
exports.badRequest = message => internalError(message, exports.BAD_REQUEST);
