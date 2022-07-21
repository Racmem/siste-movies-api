/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
const express = require('express');
const loaders = require('./loaders');
const config = require('./config');

describe('should test server configuration', () => {
  const app = express();
  const configData = config.start();
  const useSpy = jest.fn();

  jest.doMock('cors', () => () => ({
    use: useSpy
  }));

  it('use cors', () => {
    configData.isTesting = false;
    loaders.start(app, configData);
    expect(useSpy).toBeDefined();
  });

  it('server configuration fail', () => {
    try {
      loaders.start();
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError);
    }
  });
});
