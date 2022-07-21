const { formatMovieInformation } = require('./movie');
const { mockMovieInformation } = require('../../../test/mocks/movies');

describe('Movie Serializer', () => {
  describe('Get Movie details', () => {
    it('Should be success type format', () => {
      const response = formatMovieInformation(mockMovieInformation);
      expect(response.id).toBe(mockMovieInformation.id);
      expect(response.inventory.id).toBe(mockMovieInformation.inventory[0].id);
      expect(response.inventory.price).toBe(mockMovieInformation.inventory[0].price);
      expect(response.inventory.amount).toBe(mockMovieInformation.inventory[0].amount);
    });
    it('Should success format movie genders when are null', () => {
      const response = formatMovieInformation({ ...mockMovieInformation, movie_genre: [] });
      expect(response.genders).toEqual([]);
    });
    it('Should format genders list', () => {
      const response = formatMovieInformation(mockMovieInformation);
      expect(response.genders[0].id).toBe(mockMovieInformation.movie_genre[0].genre.id);
      expect(response.genders[0].description).toBe(mockMovieInformation.movie_genre[0].genre.description);
      expect(response.genders[1].id).toBe(mockMovieInformation.movie_genre[1].genre.id);
      expect(response.genders[1].description).toBe(mockMovieInformation.movie_genre[1].genre.description);
    });
  });
});
