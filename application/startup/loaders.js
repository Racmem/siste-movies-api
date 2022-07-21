const { inspect } = require('util');

const { expressMiddleware, expressRequestIdMiddleware } = require('express-wolox-logger');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const helmet = require('helmet');
const sts = require('strict-transport-security');

const documentation = require('../documentation');
const { logger } = require('../../application/logger');
const routes = require('../../infraestructure/entry-points');
const errors = require('../../infraestructure/helpers/middlewares/errors');

const globalSTS = sts.getSTS({ 'max-age': 31560000 });

const bodyParserJsonConfig = config => ({
  parameterLimit: config.api.parameterLimit,
  limit: config.api.bodySizeLimit
});

const bodyParserUrlencodedConfig = config => ({
  extended: true,
  parameterLimit: config.api.parameterLimit,
  limit: config.api.bodySizeLimit
});

module.exports = {
  start: (app, config) => {
    logger.info('Starting loaders...');

    try {
      app.use(cors());
      app.use(bodyParser.json(bodyParserJsonConfig(config)));
      app.use(bodyParser.urlencoded(bodyParserUrlencodedConfig(config)));
      app.use(expressRequestIdMiddleware());
      app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(documentation));
      app.use(helmet.noSniff());
      app.use(globalSTS);

      if (!config.isTesting) app.use(expressMiddleware({ loggerFn: logger.info }));

      routes.init(app);

      app.use(errors.handle);
    } catch (err) {
      logger.error(`Fail to start loaders because: ${inspect(err)}`);
      throw err;
    }

    logger.info('Finish loaders');
  }
};
