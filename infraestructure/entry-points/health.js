const { Router } = require('express');

const router = new Router();

router.get('', (_req, res) => res.status(200).send({ uptime: process.uptime() }));
module.exports = router;
