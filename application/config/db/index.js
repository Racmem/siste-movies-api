const config = require('..').common.database;

module.exports = {
  local: {
    username: config.username,
    password: config.password,
    database: config.name,
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    operatorsAliases: false,
    logging: true,
    createTables: config.createTables
  },
  development: {
    username: config.username,
    password: config.password,
    database: config.name,
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    operatorsAliases: false,
    logging: true,
    createTables: config.createTables
  }
};
