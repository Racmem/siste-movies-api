const { logger } = require('../logger');
const config = require('./config');
const loaders = require('./loaders');

module.exports = {
  start: app => {
    logger.info('Starting startup ...');
    const configData = config.start(app);
    const tasks = [loaders].map(task => task.start(app, configData));
    return Promise.all(tasks).then(taskResults => {
      logger.info('Startup finish');
      return [configData, ...taskResults];
    });
  }
};
