const { inspect } = require('util');

const { logger } = require('../logger');

module.exports = {
  start: () => {
    logger.info('Starting config validation...');
    try {
      // eslint-disable-next-line global-require
      const config = require('../config');
      logger.info('Finish config validation');
      return config;
    } catch (err) {
      logger.error(`Fail to start config because: ${inspect(err)}`);
      throw err;
    }
  }
};
