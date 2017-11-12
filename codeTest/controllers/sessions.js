const User = require('../models/user');

function sessionsNew(req, res) {
  res.render('sessions/new');
}

function sessionsCreate(req, res, next) {
  var email = req.body.email,
    password = req.body.password;

  User
  .findOne({ where: { email: email } })
  .then((user) => {
    if (!user) {
      res.redirect('/login');
      console.log('nada');
    } else if (!user.validPassword(password)) {
      res.redirect('/login');
      console.log('nada2');
    } else {
      req.session.user = user.dataValues;
      res.redirect('/');
      console.log('daje');
    }
  })
     .catch(next);
}

// function sessionsCreate(req, res, next) {
//   User
//      .findOne({ email: req.body.email })
//      .then((user) => {
//        if(!user || !user.validatePassword(req.body.password)) {
//          console.log('nada');
//          return res.redirect('/login');
//        }
//        req.session.userId = user.id;
//        req.session.isAuthenticated = true;
//
//        res.redirect('/');
//      })
//      .catch(next);
// }


module.exports = {
  new: sessionsNew,
  create: sessionsCreate
  // delete: sessionsDelete
};
