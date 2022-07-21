module.exports = {
  film_rating_name: {
    name: 'name',
    in: 'body',
    schema: {
      $ref: '#/components/schemas/film_rating_name'
    },
    required: true
  },
  film_rating_code: {
    name: 'code',
    in: 'body',
    schema: {
      $ref: '#/components/schemas/film_rating_code'
    },
    required: true
  }
};
