const getGenders = async repository => {
  const genders = await repository.getAll();
  return genders;
};

const getGenreByID = async (id, repository) => {
  const genre = await repository.getByID(id);
  return genre;
};

module.exports = {
  getGenders,
  getGenreByID
};
