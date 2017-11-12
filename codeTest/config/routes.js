
const express  = require('express');
const router   = express.Router();

const staticController = require('../controllers/static');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');

router.route('/')
  .get(staticController.index);

  // 2
router.route('/register')
.get(registrations.new)
.post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

module.exports = router;
