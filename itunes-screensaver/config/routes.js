const router = require('express').Router();
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const vinyls = require('../controllers/vinyls');
const secureRoute = require('../lib/secureRoute');

// router.get('/', (req, res) => res.render('statics/index'));

//////////////////////////////////// REST /////////////////////////////////////

// // INDEX
// router.route('/index')
//   .get(vinyls.index);
//
// // CREATE
// router.route('/index')
//   .post(vinyls.create);
//
// // NEW
// router.route('/vinyls/new')
//   .get(vinyls.new);
//
// // EDIT
// router.route('/vinyls/:id/edit')
//   .get(vinyls.new);
//
// // SHOW
// router.route('/vinyls/:id')
//   .get(vinyls.show);
//
// // UPDATE
// router.route('/vinyls/:id')
//   .put(vinyls.update);
//
// // DELETE
// router.route('/vinyls/:id')
//   .get(vinyls.delete);

///////////////////////////////////// REFACT ///////////////////////////////////

router.route('/')
  .get(vinyls.index)
  .post(secureRoute, vinyls.create);

router.route('/vinyls/new')
  .get(secureRoute, vinyls.new);

router.route('/vinyls/:id')
  .get(vinyls.show)
  .put(secureRoute, vinyls.update)
  .delete(secureRoute, vinyls.delete);

router.route('/vinyls/:id/edit')
  .get(secureRoute, vinyls.edit);

//////////////////////////////// embedded route ////////////////////////////////

router.route('/vinyls/:id/comments')
  .post(secureRoute, vinyls.createComment);

router.route('/vinyls/:id/comments/:commentId')
  .delete(secureRoute, vinyls.deleteComment);

///////////////////////////// REGISTER & LOGIN/OUT /////////////////////////////

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

////////////////////////////////////////////////////////////////////////////////

router.all('*', (req, res) => res.notFound());

module.exports = router;
