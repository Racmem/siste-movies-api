module.exports = {
  '/movies': {
    post: {
      tags: ['Movies'],
      summary: 'Create movie',
      parameters: [
        { $ref: '#/components/parameters/movie_name' },
        { $ref: '#/components/parameters/movie_release_date' },
        { $ref: '#/components/parameters/movie_film_rating_id' },
        { $ref: '#/components/parameters/movie_inventory_amount' },
        { $ref: '#/components/parameters/movie_inventory_price' },
        { $ref: '#/components/parameters/movie_genders' }
      ],
      responses: {
        201: {
          description: 'Movie created',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/movie_created_response'
              }
            }
          }
        },
        422: {
          description: 'Wrong Params',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/schema_error_response'
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
    },
    get: {
      tags: ['Movies'],
      summary: 'Get Movies List',
      parameters: [
        { $ref: '#/components/parameters/movie_name' },
        { $ref: '#/components/parameters/movie_genre_description' },
        { $ref: '#/components/parameters/movie_release_date' }
      ],
      responses: {
        200: {
          description: 'Movies List',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/movies_list_response'
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
    },
    delete: {
      tags: ['Movies'],
      summary: 'Delete Movie',
      parameters: [{ $ref: '#/components/parameters/id_param' }],
      responses: {
        204: {
          description: 'Movie Deleted Success',
          content: {}
        },
        404: {
          description: 'Bad Request',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/not_found_response'
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
  '/movies/:id': {
    get: {
      tags: ['Movies'],
      summary: 'Get Movie Information',
      parameters: [{ $ref: '#/components/parameters/id_param' }],
      responses: {
        200: {
          description: 'Movie Information',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/movies_information_response'
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
    },
    put: {
      tags: ['Movies'],
      summary: 'Modify Movie',
      parameters: [
        { $ref: '#/components/parameters/id_param' },
        { $ref: '#/components/parameters/movie_name' },
        { $ref: '#/components/parameters/movie_release_date' },
        { $ref: '#/components/parameters/movie_film_rating_id' },
        { $ref: '#/components/parameters/movie_inventory_amount' },
        { $ref: '#/components/parameters/movie_inventory_price' },
        { $ref: '#/components/parameters/movie_genders' }
      ],
      responses: {
        204: {
          description: 'Updated Movie Success',
          content: {}
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
