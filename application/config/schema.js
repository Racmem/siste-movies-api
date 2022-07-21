module.exports = {
  environment: { doc: 'Environment', default: 'development', format: String },
  common: {
    database: {
      url: { doc: 'URL of database server', default: '', format: String },
      host: { doc: 'Host of database server', default: '', format: String },
      port: { doc: 'Port of database', default: '', format: Number },
      name: { doc: 'Name of database', default: '', format: String },
      username: { doc: 'Username to access database', default: '', format: String },
      password: { doc: 'Password to access database', default: '', format: String },
      dialect: { doc: 'Dialect of database server', default: '', format: String },
      createTables: { doc: 'Boolean for update tables from models', default: false, format: Boolean },
      schema: { doc: 'Schema name to database', default: '', format: String }
    }
  },
  api: {
    bodySizeLimit: { doc: 'API body size limit', default: 1024 * 1024 * 10, format: 'int' },
    parameterLimit: { doc: 'API parameter limit', default: 10000, format: 'int' },
    port: { doc: 'API port', default: 8080, format: 'port' }
  },
  cors: {
    allowlist: { default: 'http://localhost:0000', format: String }
  },
  crypto: {
    secret_key: { default: '', format: String }
  },
  jwtToken: {
    tokenKey: { default: '', format: String },
    tokenExpiration: { default: '', format: String }
  },
  environmentShortName: { doc: 'Environment Short name', default: 'dev', format: String },
  isProduction: { doc: 'isProduction flag', default: false, format: Boolean },
  isDevelopment: { doc: 'isDevelopment flag', default: false, format: Boolean },
  isRelease: { doc: 'isRelease flag', default: false, format: Boolean },
  isTesting: { doc: 'isTesting flag', default: false, format: Boolean }
};
