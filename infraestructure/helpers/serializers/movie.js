const formatFilmRating = filmRating => ({
  id: filmRating.id,
  name: filmRating.name,
  code: filmRating.code
});

const formatInventory = inventory => ({
  id: inventory[0].id,
  amount: inventory[0].amount,
  price: inventory[0].price
});

const formatGenders = genders =>
  genders.map(genre => ({
    id: genre.genre.id,
    description: genre.genre.description
  }));

const formatDate = date => date.toISOString().split('T')[0];

exports.formatMovieInformation = movie => ({
  id: movie.id,
  name: movie.name,
  release_date: movie.release_date,
  film_rating: movie.film_rating ? formatFilmRating(movie.film_rating) : null,
  genders: movie.movie_genre ? formatGenders(movie.movie_genre) : [],
  inventory: movie.inventory ? formatInventory(movie.inventory) : null,
  created_at: formatDate(movie.createdAt),
  updated_at: formatDate(movie.updatedAt)
});

exports.formatMovieListInformation = movies => movies.map(movie => exports.formatMovieInformation(movie));
