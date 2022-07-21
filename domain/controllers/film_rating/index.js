const { logger } = require('../../../application/logger');
const { badRequest, NOT_FOUND } = require('../../../application/errors');

const { getFilmRatingByID, getFilmRatings } = require('../../usecase/film_rating/film_rating');
const FilmRatingRepository = require('../../../infraestructure/repositories/film_rating_sequelize');

class FilmRatingController {
  constructor() {
    this.Repository = new FilmRatingRepository();
  }

  async getAll(req, res, next) {
    try {
      const filmRatings = await getFilmRatings(this.Repository);
      res.json({ ...filmRatings });
    } catch (e) {
      logger.error(`Error getting film ratings ${JSON.stringify(e)}`);
      next(badRequest(e.name || 'bad request'));
    }
  }

  async getByID(req, res, next) {
    try {
      logger.info(`Trying to get film rating with id ${req.params.id}`);
      const filmRating = await getFilmRatingByID(req.params.id, this.Repository);
      if (filmRating) {
        res.json(filmRating);
      } else {
        logger.error(`Film rating not found with id ${req.params.id}`);
        res.status(404).send({ internal_code: NOT_FOUND });
      }
    } catch (e) {
      logger.error(`Error getting staff details ${JSON.stringify(e)}`);
      next(badRequest(e.name || 'bad request'));
    }
  }
}

module.exports = new FilmRatingController();
