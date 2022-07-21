exports.film_rating_id = {
  type: 'int',
  example: 1
};

exports.film_rating_name = {
  type: 'string',
  example: 'General'
};

exports.film_rating_code = {
  type: 'string',
  example: 'G'
};

exports.film_rating_information = {
  type: 'object',
  properties: {
    id: exports.film_rating_id,
    name: exports.film_rating_name,
    code: exports.film_rating_code
  }
};

exports.film_rating_list_response = {
  type: 'object',
  properties: {
    total: {
      type: 'int',
      example: 1
    },
    data: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: exports.film_rating_id,
          name: exports.film_rating_name,
          code: exports.film_rating_code
        }
      }
    }
  }
};
