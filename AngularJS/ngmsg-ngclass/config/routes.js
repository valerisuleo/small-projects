const router = require('express').Router();
const properties = require('../controllers/properties');

router.route('/properties')
  .get(properties.index)
  .post(properties.create);

router.route('/properties/:id')
  .get(properties.show)
  .put(properties.update)
  .delete(properties.delete);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
