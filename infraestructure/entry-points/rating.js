const { Router } = require('express');

const FilmRatingController = require('../../domain/controllers/film_rating');
const { validateSchema } = require('../helpers/middlewares/schema_validator');
const { getFilmRating } = require('../helpers/schemas/film_rating/film_rating');

const router = new Router();

router.get('', FilmRatingController.getAll.bind(FilmRatingController));

router.get(
  '/:id',
  [validateSchema({ schema: getFilmRating })],
  FilmRatingController.getByID.bind(FilmRatingController)
);

module.exports = router;
