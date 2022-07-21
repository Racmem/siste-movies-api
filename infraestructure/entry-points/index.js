/* Routes */
const healthRoute = require('./health');
const genreRoute = require('./genre');
const filmRatingRoute = require('./rating');
const movieRoute = require('./movie');

/* Helpers */
const { corsOptions } = require('../helpers/middlewares/cors');

const apiPathVersion = '/api/v1';

exports.init = app => {
  app.use(`${apiPathVersion}/health`, [corsOptions], healthRoute);
  app.use(`${apiPathVersion}/ratings`, [corsOptions], filmRatingRoute);
  app.use(`${apiPathVersion}/genders`, [corsOptions], genreRoute);
  app.use(`${apiPathVersion}/movies`, [corsOptions], movieRoute);
  app.all('*', (_req, res) => res.status(404).send({ data: 'Not Found :(' }));
};
