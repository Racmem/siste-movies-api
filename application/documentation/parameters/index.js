const film_ratings = require('./film_ratings');
const genders = require('./genders');
const movies = require('./movies');

const id_param = {
  name: 'id',
  in: 'params',
  schema: {
    $ref: '#/components/schemas/id'
  },
  required: true
};

module.exports = { id_param, ...film_ratings, ...genders, ...movies };
