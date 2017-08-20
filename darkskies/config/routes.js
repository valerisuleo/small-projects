const router = require('express').Router();
const darksky = require('../controllers/darksky');

router.get('/forecasts', darksky.forecasts);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
