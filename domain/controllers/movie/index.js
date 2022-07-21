const { logger } = require('../../../application/logger');
const { badRequest, NOT_FOUND } = require('../../../application/errors');

const {
  getMovies,
  getMovieByID,
  createMovie,
  updateMovie,
  deleteMovie
} = require('../../usecase/movie/movie');
const MovieRepository = require('../../../infraestructure/repositories/movie_sequelize');

const {
  formatMovieListInformation,
  formatMovieInformation
} = require('../../../infraestructure/helpers/serializers/movie');

class MovieController {
  constructor() {
    this.Repository = new MovieRepository();
  }

  async getAll(req, res, next) {
    try {
      const movies = await getMovies(req.query, this.Repository);
      res.json({ ...movies, data: formatMovieListInformation(movies.data) });
    } catch (e) {
      logger.error(`Error getting movies ${JSON.stringify(e)}`);
      next(badRequest(e.message || 'bad request'));
    }
  }

  async getByID(req, res, next) {
    try {
      logger.info(`Trying to get movie with id ${req.params.id}`);
      const movie = await getMovieByID(req.params.id, this.Repository);
      if (movie) {
        res.json(formatMovieInformation(movie));
      } else {
        logger.error(`Movie not found with id ${req.params.id}`);
        res.status(404).send({ internal_code: NOT_FOUND });
      }
    } catch (e) {
      logger.error(`Error getting movie details ${JSON.stringify(e)}`);
      next(badRequest(e.message || 'bad request'));
    }
  }

  async create(req, res, next) {
    try {
      const data = req.body;
      const result = await createMovie(data, this.Repository);
      res.status(201).send(formatMovieInformation(result));
    } catch (e) {
      logger.error(`Error creating movie ${JSON.stringify(e)}`);
      next(badRequest(e.message || 'bad request'));
    }
  }

  async update(req, res, next) {
    try {
      const data = { ...req.body, id: req.params.id };
      const movie = await updateMovie(data, this.Repository);
      if (movie) {
        res.status(204).send();
      } else {
        res.status(404).send({ internal_code: NOT_FOUND });
      }
    } catch (e) {
      logger.error(`Error updating movie ${JSON.stringify(e)}`);
      next(badRequest(e.message || 'bad request'));
    }
  }

  async remove(req, res, next) {
    try {
      const deleted = await deleteMovie(req.params.id, this.Repository);
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).send();
      }
    } catch (e) {
      logger.error(`Error deleting movie ${JSON.stringify(e)}`);
      next(badRequest(e.message || 'bad request'));
    }
  }
}

module.exports = new MovieController();
