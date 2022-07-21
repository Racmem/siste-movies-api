module.exports = {
  movie_name: {
    name: 'name',
    in: 'body',
    schema: {
      $ref: '#/components/schemas/movie_name'
    },
    required: true
  },
  movie_release_date: {
    name: 'release_data',
    in: 'body',
    schema: {
      $ref: '#/components/schemas/movie_release_date'
    },
    required: true
  },
  movie_film_rating_id: {
    name: 'film_rating_id',
    in: 'body',
    schema: {
      $ref: '#/components/schemas/movie_film_rating_id'
    },
    required: true
  },
  movie_inventory_amount: {
    name: 'amount',
    in: 'body',
    schema: {
      $ref: '#/components/schemas/movie_inventory_amount'
    },
    required: true
  },
  movie_inventory_price: {
    name: 'price',
    in: 'body',
    schema: {
      $ref: '#/components/schemas/movie_inventory_price'
    },
    required: true
  },
  movie_genders: {
    name: 'gender',
    in: 'body',
    schema: {
      $ref: '#/components/schemas/movie_genders'
    },
    required: true
  }
};
