exports.id = {
  type: 'integer',
  example: 1
};

exports.boolean_true = {
  type: 'boolean',
  example: true
};

exports.date = {
  type: 'string',
  example: '2021-05-20'
};

exports.error_msg = {
  type: 'string',
  example: 'The error description'
};

exports.param_key = {
  type: 'string',
  example: 'param_key'
};

exports.body_location = {
  type: 'string',
  example: 'body'
};

exports.query_location = {
  type: 'string',
  example: 'query'
};

exports.schema_error = {
  type: 'string',
  example: 'SCHEMA_ERROR',
  required: false
};

exports.bad_request_error = {
  type: 'string',
  example: 'BAD_REQUEST',
  required: false
};

exports.not_found_error = {
  type: 'string',
  example: 'NOT_FOUND',
  required: false
};

exports.unauthorized_error = {
  type: 'string',
  example: 'UNATHORIZED'
};

exports.schema_error_response = {
  type: 'object',
  properties: {
    message: {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              msg: exports.error_msg,
              param: exports.param_key,
              location: exports.body_location
            }
          }
        }
      }
    },
    internal_code: exports.schema_error
  }
};

exports.bad_request_response = {
  type: 'object',
  properties: {
    message: exports.error_msg,
    internal_code: exports.bad_request_error
  }
};

exports.unathorized_response = {
  type: 'object',
  properties: {
    internal_code: exports.unauthorized_error
  }
};

exports.not_found_response = {
  type: 'object',
  properties: {
    internal_code: exports.not_found_error
  }
};

exports.query_error_response = {
  type: 'object',
  properties: {
    message: {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              msg: exports.error_msg,
              param: exports.param_key,
              location: exports.query_location
            }
          }
        }
      }
    },
    internal_code: exports.schema_error
  }
};
