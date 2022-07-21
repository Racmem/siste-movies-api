const { Router } = require('express');

const MovieController = require('../../domain/controllers/movie');
const { validateSchema } = require('../helpers/middlewares/schema_validator');
const {
  createMovieSchema,
  getMovieSchema,
  updateMovieSchema,
  deleteMovieSchema
} = require('../helpers/schemas/movies/movie');

const router = new Router();

router.post(
  '',
  [validateSchema({ schema: createMovieSchema })],
  MovieController.create.bind(MovieController)
);

router.get('', MovieController.getAll.bind(MovieController));

router.get(
  '/:id',
  [validateSchema({ schema: getMovieSchema })],
  MovieController.getByID.bind(MovieController)
);

router.put(
  '/:id',
  [validateSchema({ schema: updateMovieSchema })],
  MovieController.update.bind(MovieController)
);

router.delete(
  '/:id',
  [validateSchema({ schema: deleteMovieSchema })],
  MovieController.remove.bind(MovieController)
);

module.exports = router;
