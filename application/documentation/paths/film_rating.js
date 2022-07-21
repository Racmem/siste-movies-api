module.exports = {
  '/ratings': {
    get: {
      tags: ['Film Rating'],
      summary: 'Get Film Rating List',
      parameters: [],
      responses: {
        200: {
          description: 'Film Rating List',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/film_rating_list_response'
              }
            }
          }
        },
        422: {
          description: 'Wrong Query',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/query_error_response'
              }
            }
          }
        },
        400: {
          description: 'Bad Request',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/bad_request_response'
              }
            }
          }
        }
      }
    }
  },
  '/ratings/:id': {
    get: {
      tags: ['Film Rating'],
      summary: 'Get Film Rating Information',
      parameters: [{ $ref: '#/components/parameters/id_param' }],
      responses: {
        200: {
          description: 'Film Rating Information',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/film_rating_information'
              }
            }
          }
        },
        422: {
          description: 'Wrong Query',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/query_error_response'
              }
            }
          }
        },
        400: {
          description: 'Bad Request',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/bad_request_response'
              }
            }
          }
        }
      }
    }
  }
};
