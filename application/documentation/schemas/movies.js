exports.movie_id = {
  type: 'int',
  example: 1
};

exports.movie_name = {
  type: 'string',
  example: 'Movie'
};

exports.movie_release_date = {
  type: 'string',
  example: '2021-05-20'
};

exports.movie_film_rating_id = {
  type: 'int',
  example: 1
};

exports.movie_film_rating_name = {
  type: 'string',
  example: 'General'
};

exports.movie_film_rating_code = {
  type: 'string',
  example: 'G'
};

exports.movie_inventory_amount = {
  type: 'int',
  example: 10
};

exports.movie_inventory_price = {
  type: 'float',
  example: 10.7
};

exports.movie_genders = {
  type: 'array',
  example: [1, 2]
};

exports.movie_genre_id = {
  type: 'int',
  example: 1
};

exports.movie_genre_description = {
  type: 'string',
  example: 'Fantasia'
};

exports.movie_created_response = {
  type: 'object',
  properties: {
    id: exports.movie_id,
    name: exports.movie_name,
    release_date: exports.movie_release_date,
    film_rating: {
      id: exports.movie_film_rating_id,
      name: exports.movie_film_rating_name,
      code: exports.movie_film_rating_code
    },
    inventory: {
      id: exports.movie_film_rating_id,
      price: exports.movie_inventory_price,
      amount: exports.movie_inventory_amount
    },
    genders: [
      {
        id: exports.movie_genre_id,
        description: exports.movie_genre_description
      }
    ]
  }
};

exports.movies_information_response = {
  type: 'object',
  properties: {
    id: exports.movie_id,
    name: exports.movie_name,
    release_date: exports.movie_release_date,
    inventory: {
      id: exports.movie_film_rating_id,
      price: exports.movie_inventory_price,
      amount: exports.movie_inventory_amount
    },
    genders: [
      {
        id: exports.movie_genre_id,
        description: exports.movie_genre_description
      }
    ]
  }
};

exports.movies_list_response = {
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
          id: exports.movie_id,
          name: exports.movie_name,
          release_date: exports.movie_release_date,
          inventory: {
            id: exports.movie_film_rating_id,
            price: exports.movie_inventory_price,
            amount: exports.movie_inventory_amount
          },
          genders: [
            {
              id: exports.movie_genre_id,
              description: exports.movie_genre_description
            }
          ]
        }
      }
    }
  }
};
