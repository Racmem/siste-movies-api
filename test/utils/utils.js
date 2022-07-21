exports.middlewareTester = async (req, res, middlewares, callback) => {
  for (let i = 0; i < middlewares.length; i++) {
    await middlewares[i](req, res, callback);
  }
};
