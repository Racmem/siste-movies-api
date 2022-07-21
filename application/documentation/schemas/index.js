const common = require('./common');
const film_rating = require('./fIlm_rating');
const genders = require('./genders');
const movies = require('./movies');

module.exports = { ...common, ...film_rating, ...genders, ...movies };
