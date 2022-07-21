/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
module.exports = class MovieRepository {
  constructor() {}

  persist(movie) {
    return Promise.reject(new Error('Not implemented'));
  }

  getAll(query) {
    return Promise.reject(new Error('Not implemented'));
  }

  getByID(id) {
    return Promise.reject(new Error('Not implemented'));
  }

  update(movie) {
    return Promise.reject(new Error('Not implemented'));
  }

  delete(id) {
    return Promise.reject(new Error('Not implemented'));
  }
};
