const { logger } = require('../../../application/logger');
const { badRequest, NOT_FOUND } = require('../../../application/errors');

const { getGenders, getGenreByID } = require('../../usecase/genre/genre');
const GenreSequelize = require('../../../infraestructure/repositories/genre_sequelize');

class GenreController {
  constructor() {
    this.Repository = new GenreSequelize();
  }

  async getAll(req, res, next) {
    try {
      const genders = await getGenders(this.Repository);
      res.json({ ...genders });
    } catch (e) {
      logger.error(`Error getting genders ${JSON.stringify(e)}`);
      next(badRequest(e.name || 'bad request'));
    }
  }

  async getByID(req, res, next) {
    try {
      logger.info(`Trying to get genre with id ${req.params.id}`);
      const genre = await getGenreByID(req.params.id, this.Repository);
      if (genre) {
        res.json(genre);
      } else {
        logger.error(`Genre not found with id ${req.params.id}`);
        res.status(404).send({ internal_code: NOT_FOUND });
      }
    } catch (e) {
      logger.error(`Error getting staff details ${JSON.stringify(e)}`);
      next(badRequest(e.name || 'bad request'));
    }
  }
}

module.exports = new GenreController();
