const internalError = (message, internalCode) => ({
  message,
  internalCode
});

exports.DEFAULT_ERROR = 'DEFAULT_ERROR';
exports.SCHEMA_ERROR = 'SCHEMA_ERROR';
exports.UNAUTHORIZED = 'UNAUTHORIZED';
exports.BAD_REQUEST = 'BAD_REQUEST';
exports.CONFLICT_ERROR = 'CONFLICT_ERROR';
exports.AUDIT_ERROR = 'AUDIT_ERROR';
exports.NOT_FOUND = 'NOT_FOUND';
exports.SERVER_ERROR = 'SERVER_ERROR';

exports.keyNotExist = key => `The key ${key} must be exist`;
exports.typeError = ({ key, type }) => `The key ${key} must be ${type}`;
exports.invalidParameterLength = key => `The key ${key} length is invalid`;
exports.schemaError = message => internalError(message, exports.SCHEMA_ERROR);
exports.badRequest = message => internalError(message, exports.BAD_REQUEST);
exports.defaultError = message => internalError(message, exports.DEFAULT_ERROR);
exports.notFound = message => internalError(message, exports.NOT_FOUND);
exports.unauthorized = message => internalError(message, exports.UNAUTHORIZED);
exports.serverError = message => internalError(message, exports.SERVER_ERROR);
exports.errorValueMinMax = ({ min, max }) => `The ${min} value must not be less than ${max} value`;
exports.fieldRequired = field => `The field ${field} is required`;
exports.alphaNumError = key => `${key} only supports alphanumeric characters`;
exports.dateSchemaType = key => `The key ${key} must have date schema`;
