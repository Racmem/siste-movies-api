const { Router } = require('express');

const GenreController = require('../../domain/controllers/genre');
const { validateSchema } = require('../helpers/middlewares/schema_validator');
const { getGenre } = require('../helpers/schemas/genders/genre');

const router = new Router();

router.get('', GenreController.getAll.bind(GenreController));

router.get('/:id', [validateSchema({ schema: getGenre })], GenreController.getByID.bind(GenreController));

module.exports = router;
