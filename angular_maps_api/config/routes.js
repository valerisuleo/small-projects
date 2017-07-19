const router = require('express').Router();
const wondersController = require('../controllers/wonders');

router.route('/wonder')
  .get(wondersController.index)
  .post(wondersController.create);

router.route('/wonder/:id')
  .get(wondersController.show)
  .put(wondersController.update)
  .delete(wondersController.delete);

// catch all 404
router. all('*', (req, res) => res.notFound());

module.exports = router;

// 10 require routes in inndex.js
