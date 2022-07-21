const convict = require('convict');

const configSchema = require('./schema');
const { removeObjectUndefined, assignObject } = require('../../infraestructure/helpers/util/objects');
require('dotenv').config();

const ENVIRONMENT = process.env.NODE_ENV;
const configFile = `./${ENVIRONMENT}/`;
const customConfig = require(configFile).config;

const loadConfig = configLoad => {
  const sanitizedConfig = removeObjectUndefined(configLoad);
  const convictConfig = convict(configSchema);
  convictConfig.load(sanitizedConfig).validate();
  return convictConfig.getProperties();
};

const config = {
  environment: process.env.ENVIRONMENT,
  common: {
    database: {
      url: process.env.NODE_API_DB_URL,
      host: process.env.NODE_API_DB_HOST,
      port: process.env.NODE_API_DB_PORT,
      name: process.env.NODE_API_DB_NAME,
      username: process.env.NODE_API_DB_USERNAME,
      password: process.env.NODE_API_DB_PASSWORD,
      dialect: process.env.NODE_API_DB_DIALECT,
      createTables: process.env.NODE_API_DB_CREATE_TABLES,
      schema: process.env.NODE_API_DB_SCHEMA_NAME
    }
  },
  api: {
    bodySizeLimit: process.env.API_BODY_SIZE_LIMIT,
    parameterLimit: process.env.API_BODY_PARAMETER_LIMIT,
    port: process.env.PORT
  },
  cors: {
    allowlist: process.env.ALLOWLIST || 'http://localhost:0000'
  },
  crypto: {
    secret_key: process.env.CRYPTO_SECRET_KEY
  },
  jwtToken: {
    tokenKey: process.env.JWT_TOKEN_KEY,
    tokenExpiration: process.env.JWT_TOKEN_EXPIRATION_TIME
  }
};

const environmentConfig = assignObject(customConfig, config);

module.exports = loadConfig(environmentConfig);
