'use strict';

const { inspect } = require('util');
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const config = require('../../../application/config');
const { logger } = require('../../../application/logger');

const { Op } = Sequelize;
const { environment, common } = config;
const configDB = require(`${__dirname}/../../../application/config/db/`)[environment];
const db = {};
let sequelize = null;

const setupSequelize = () => {
  fs.readdirSync(__dirname)
    .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
    .forEach(file => {
      const model = sequelize.import(path.join(__dirname, file));
      db[model.name] = model;
    });

  Object.keys(db).forEach(modelName => {
    if (db[modelName] && db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  if (configDB.createTables) {
    sequelize.sync({
      force: true
    });
  }
};

logger.info(`The configured environment is ${inspect(environment)}`);

if (environment !== 'testing') {
  configDB.schema = common.database.schema;
  sequelize = new Sequelize(configDB.database, configDB.username, configDB.password, configDB);
  setupSequelize();
}

db.sequelize = sequelize;
db.Op = Op;

module.exports = db;
