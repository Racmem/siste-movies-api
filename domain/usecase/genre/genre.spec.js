const { getGenreByID, getGenders } = require('./genre');

describe('Genders', () => {
  describe('GET Genders', () => {
    const genreExpected = {
      total: 1,
      data: [
        {
          id: 1,
          description: 'Fantasia'
        }
      ]
    };

    const repository = {
      getAll: jest.fn().mockImplementation(() => Promise.resolve(genreExpected))
    };

    it('Should be success', async () => {
      const genreFetched = await getGenders(repository);
      expect(genreFetched).toEqual(genreExpected);
    });
  });

  describe('GET Genre By ID', () => {
    const genreExpected = {
      id: 1,
      description: 'Accion'
    };

    const repository = {
      getByID: jest.fn().mockImplementation(() => Promise.resolve(genreExpected))
    };

    it('Should be success', async () => {
      const genreFetched = await getGenreByID(1, repository);
      expect(genreFetched).toEqual(genreExpected);
    });
  });
});
