const cors = require('./cors');
const { allowlist } = require('../../../application/config').cors;

describe('Middleware Cors', () => {
  const mockRequest = originTest => ({
    headers: {
      origin: originTest
    }
  });
  describe('Validation Request Cors', () => {
    const allowedOrigins = allowlist.split(',');
    const mockResponse = () => {
      const resp = {};
      resp.setHeader = jest.fn().mockReturnValue(resp);
      return resp;
    };
    const res = mockResponse();
    const next = jest.fn();

    it('should response origin allow', () => {
      const req = mockRequest(allowedOrigins[0]);
      cors.corsOptions(req, res, next);
      expect(res.setHeader).toBeDefined();
      expect(res.setHeader).toBeCalledWith('Access-Control-Allow-Origin', allowedOrigins[0]);
      expect(next).toHaveBeenCalled();
    });

    it('should response origin not allowed', () => {
      const req = mockRequest('https://site-unknown.com');
      cors.corsOptions(req, res, next);
      expect(res.setHeader).toBeDefined();
      expect(res.setHeader).toBeCalledWith('Access-Control-Allow-Origin', allowedOrigins[0]);
      expect(next).toHaveBeenCalled();
    });
  });
});
