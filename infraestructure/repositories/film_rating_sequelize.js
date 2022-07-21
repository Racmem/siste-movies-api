// Database
const db = require('../driven-adapters/sequelize');

// Models
const FilmRatingRepository = require('../../domain/repositories/film_rating_repository');

module.exports = class extends FilmRatingRepository {
  constructor() {
    super();
    this.FilmRating = db.film_rating;
  }

  async getAll() {
    const filmRatings = this.FilmRating.findAll({ order: [['name', 'ASC']], include: this.include });
    const total = this.FilmRating.count();

    const list = await Promise.all([total, filmRatings]);
    return Promise.resolve({ total: list[0], data: list[1] });
  }

  async getByID(id) {
    const filmRating = await this.FilmRating.findOne({
      where: { id },
      limit: 1,
      include: this.include
    });
    return Promise.resolve(filmRating);
  }
};
