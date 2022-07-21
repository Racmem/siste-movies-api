const film_rating = require('./film_rating');
const genders = require('./genders');
const movie = require('./movie');

module.exports = { ...film_rating, ...genders, ...movie };
