const paths = require('./paths');
const schemas = require('./schemas');
const parameters = require('./parameters');

module.exports = {
  openapi: '3.0.3',
  info: {
    version: '0.0.1',
    title: 'siste_movies_api',
    description: 'Sistecredito movies API',
    contact: {
      name: 'Oscar F. Muñoz Lopez',
      email: 'osccarml.1149@gmail.com'
    }
  },
  tags: [
    {
      name: 'Film Rating',
      description: 'Endpoints for film rating management'
    },
    {
      name: 'Genders',
      description: 'Endpoints for genders management'
    },
    {
      name: 'Movies',
      description: 'Endpoints for movies management'
    }
  ],
  paths,
  components: { schemas, parameters }
};
