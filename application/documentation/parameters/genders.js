module.exports = {
  genre_description: {
    name: 'description',
    in: 'body',
    schema: {
      $ref: '#/components/schemas/genre_description'
    },
    required: true
  }
};
