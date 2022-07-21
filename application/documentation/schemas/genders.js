exports.genre_id = {
  type: 'int',
  example: 1
};

exports.genre_description = {
  type: 'string',
  example: 'Fantasia'
};

exports.genre_information_response = {
  type: 'object',
  properties: {
    id: exports.genre_id,
    description: exports.genre_description
  }
};

exports.genders_list_information = {
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
          id: exports.genre_id,
          description: exports.genre_description
        }
      }
    }
  }
};
