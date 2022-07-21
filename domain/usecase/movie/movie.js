const createMovie = async (data, repository) => {
  const result = await repository.persist(data);
  return result;
};

const getMovies = async (query, repository) => {
  const movies = await repository.getAll(query);
  return movies;
};

const getMovieByID = async (id, repository) => {
  const movie = await repository.getByID(id);
  return movie;
};

const updateMovie = async (data, repository) => {
  const result = await repository.update(data);
  return result;
};

const deleteMovie = async (id, repository) => {
  const result = await repository.delete(id);
  return result;
};

module.exports = {
  createMovie,
  getMovies,
  getMovieByID,
  updateMovie,
  deleteMovie
};
