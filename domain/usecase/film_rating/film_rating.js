const getFilmRatings = async repository => {
  const filmRatings = await repository.getAll();
  return filmRatings;
};

const getFilmRatingByID = async (id, repository) => {
  const filmRating = await repository.getByID(id);
  return filmRating;
};

module.exports = {
  getFilmRatings,
  getFilmRatingByID
};
