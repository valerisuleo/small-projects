const router = require('express').Router();
const propertysController = require('../controllers/propertys');


router.route('/propertys')
  .get(propertysController.index)
  .post(propertysController.create);

router.route('/propertys/:id')
  .get(propertysController.show)
  .put(propertysController.update)
  .delete(propertysController.delete);

// catch all 404 response
router.all('*', (req, res) => res.notFound());

module.exports = router;
