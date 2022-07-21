module.exports = {
  '/genders': {
    get: {
      tags: ['Genders'],
      summary: 'Get Genders List',
      parameters: [],
      responses: {
        200: {
          description: 'Genders List',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/genders_list_information'
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
  '/genders/:id': {
    get: {
      tags: ['Genders'],
      summary: 'Get Genre Information',
      parameters: [{ $ref: '#/components/parameters/id_param' }],
      responses: {
        200: {
          description: 'Genre Information',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/genre_information_response'
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
