
const express  = require('express');
const router   = express.Router();

const staticController = require('../controllers/static');
const imageController = require('../controllers/image');
const registrations = require('../controllers/registrations');
const oauthController = require('../controllers/oauth');
const sessions = require('../controllers/sessions');
const secure = require('../lib/secure');
const upload = require('../lib/upload');

router.route('/')
  .get(secure, staticController.index);

router.route('/image-upload')
  .get(secure, imageController.imageForm)
  .post(secure, upload.single('image'), imageController.imageUpload);

router.route('/gallery')
  .get(secure, imageController.gallery);

  // 2
router.route('/register')
.get(registrations.new)
.post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/oauth/facebook')
  .get(oauthController.facebook);

module.exports = router;
