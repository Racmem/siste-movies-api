const { getFilmRatings, getFilmRatingByID } = require('./film_rating');

describe('Film Rating', () => {
  describe('GET Film Ratings', () => {
    const filmRatingExpected = {
      total: 1,
      data: [
        {
          id: 1,
          name: 'General',
          code: 'G'
        }
      ]
    };

    const repository = {
      getAll: jest.fn().mockImplementation(() => Promise.resolve(filmRatingExpected))
    };

    it('should be success', async () => {
      const filmRatingFetched = await getFilmRatings(repository);
      expect(filmRatingFetched).toEqual(filmRatingExpected);
    });
  });

  describe('GET FilmRating By ID', () => {
    const filmRatingExpected = {
      id: 1,
      name: 'General',
      code: 'G'
    };

    const repository = {
      getByID: jest.fn().mockImplementation(() => Promise.resolve(filmRatingExpected))
    };

    it('Should be success', async () => {
      const filmRatingFetched = await getFilmRatingByID(1, repository);
      expect(filmRatingFetched).toEqual(filmRatingExpected);
    });
  });
});
