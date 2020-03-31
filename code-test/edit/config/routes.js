const router = require('express').Router();
const stateController = require('../controllers/state');

router.route('/state')
  .get(stateController.index);

// catch all 404 response
router.all('*', (req, res) => res.notFound());

module.exports = router;
