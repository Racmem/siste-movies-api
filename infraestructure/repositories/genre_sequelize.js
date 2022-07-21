// Database
const db = require('../driven-adapters/sequelize');

// Models
const GenreRepository = require('../../domain/repositories/genre_repository');

module.exports = class extends GenreRepository {
  constructor() {
    super();
    this.Genre = db.genders;
  }

  async getAll() {
    const genders = this.Genre.findAll({ order: [['description', 'ASC']], include: this.include });
    const total = this.Genre.count();

    const list = await Promise.all([total, genders]);
    return Promise.resolve({ total: list[0], data: list[1] });
  }

  async getByID(id) {
    const genre = await this.Genre.findOne({
      where: { id },
      limit: 1,
      include: this.include
    });
    return Promise.resolve(genre);
  }
};
