const express = require('express');

const { logger } = require('./application/logger');
const startup = require('./application/startup');

const app = express();

module.exports = startup
  .start(app)
  .then(([config]) => {
    const { port } = config.api;

    if (!config.isTesting) {
      app.listen(port);
      logger.info(`Listening on port: ${port}`);
    }
    logger.info('Success to start app');
    return app;
  })
  .catch(err => {
    logger.error(`Fail to start app because of: ${err}`);
    throw err;
  });
