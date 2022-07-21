const errors = require('../../../application/errors');
const { logger } = require('../../../application/logger');

const DEFAULT_STATUS_CODE = 500;

const statusCodes = {
  [errors.DEFAULT_ERROR]: 500,
  [errors.SERVER_ERROR]: 500,
  [errors.SCHEMA_ERROR]: 422,
  [errors.UNAUTHORIZED]: 401,
  [errors.BAD_REQUEST]: 400
};

exports.userNotAuthorized = () => ({
  internalCode: errors.UNAUTHORIZED
});

exports.badRequest = message => ({
  internalCode: errors.BAD_REQUEST,
  message
});

exports.handle = (error, _, res, next) => {
  if (error.internalCode) {
    res.status(statusCodes[error.internalCode] || DEFAULT_STATUS_CODE);
  } else {
    // Unrecognized error
    next(error);
    res.status(DEFAULT_STATUS_CODE);
  }
  logger.error(error);
  return res.send({ message: error.message, internal_code: error.internalCode });
};
