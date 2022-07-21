const { createMovie, getMovies, getMovieByID, deleteMovie, updateMovie } = require('./movie');

describe('Movies', () => {
  describe('Creation of Movie', () => {
    const id = 1;
    const movieData = {
      name: 'Movie',
      release_date: '2022-07-20',
      film_rating_id: 1,
      amount: 10,
      price: 14.5,
      genders: [1, 2]
    };

    const movieCreatedExpected = {
      id,
      ...movieData
    };

    const repository = {
      persist: jest.fn().mockImplementation(movie => {
        movie.id = id;
        return Promise.resolve(movie);
      })
    };

    it('Should success', async () => {
      const movieCreated = await createMovie(movieData, repository);
      expect(movieCreated).toEqual(movieCreatedExpected);
    });
  });

  describe('Get Movies', () => {
    const moviesExpected = {
      total: 1,
      data: [
        {
          name: 'Movie',
          release_date: '2022-07-20',
          film_rating_id: 1,
          amount: 10,
          price: 14.5,
          genders: [
            {
              id: 1,
              description: 'Fantasia'
            }
          ]
        }
      ]
    };

    const repository = {
      getAll: jest.fn().mockImplementation(() => Promise.resolve(moviesExpected))
    };

    it('Should be success', async () => {
      const moviesFetched = await getMovies({}, repository);
      expect(moviesFetched).toEqual(moviesExpected);
    });
  });

  describe('GET Movie By ID', () => {
    const movieExpected = {
      name: 'Movie',
      release_date: '2022-07-20',
      film_rating_id: 1,
      amount: 10,
      price: 14.5,
      genders: [
        {
          id: 1,
          description: 'Fantasia'
        }
      ]
    };

    const repository = {
      getByID: jest.fn().mockImplementation(() => Promise.resolve(movieExpected))
    };

    it('Should be success', async () => {
      const movieFetched = await getMovieByID(1, repository);
      expect(movieFetched).toEqual(movieExpected);
    });
  });

  describe('Update Movie', () => {
    const id = 1;

    const movieData = {
      name: 'Movie',
      release_date: '2022-07-20',
      film_rating_id: 1,
      amount: 10,
      price: 14.5,
      genders: [1, 2]
    };

    const movieExpectedData = { id, ...movieData };

    const repository = {
      update: jest.fn().mockReturnValueOnce(Promise.resolve(movieExpectedData))
    };

    it('Should success', async () => {
      const movieUpdated = await updateMovie(movieData, repository);
      expect(movieUpdated).toEqual(movieExpectedData);
    });
  });

  describe('Delete Movie', () => {
    const responseExpected = 1;

    const repository = {
      delete: jest.fn().mockImplementation(() => Promise.resolve(responseExpected))
    };

    it('Should be success', async () => {
      const responseFetched = await deleteMovie({}, repository);
      expect(responseFetched).toEqual(responseExpected);
    });
  });
});
