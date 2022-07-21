exports.mockMovieInformation = {
  id: 1,
  name: 'Movie',
  release_date: '2022-07-20T00:00:00.000Z',
  film_rating_id: { id: 1, name: 'General', code: 'G' },
  createdAt: new Date(),
  updatedAt: new Date(),
  movie_genre: [
    { id: 1, genre: { id: 1, description: 'Fantasia' } },
    { id: 1, genre: { id: 2, description: 'Aventuras' } }
  ],
  inventory: [
    {
      id: 1,
      price: 17.9,
      amount: 8
    }
  ]
};
