const { allowlist } = require('../../../application/config').cors;

exports.corsOptions = (req, res, next) => {
  const allowedOrigins = allowlist.split(',');
  const originAllowed = allowedOrigins.includes(req.headers.origin) ? req.headers.origin : allowedOrigins[0];
  res.setHeader('Access-Control-Allow-Origin', originAllowed);
  next();
};
