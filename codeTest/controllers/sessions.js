const User = require('../models/user');

function newRoute(req, res) {
  res.render('sessions/new');
}

function createRoute(req, res) {

  var username = req.body.username,
    password = req.body.password;

  User
  .findOne({ where: { username: username } })
  .then((user) => {
    if (!user) {
      res.redirect('/login');
    } else if (!user.validPassword(password)) {
      res.redirect('/login');
    }
  });
}



// .post((req, res) => {
//
//
//
//
//   var username = req.body.username,
//   password = req.body.password;
//
//   User
//   .findOne({ where: { username: username } })
//   .then((user) => {
//     if (!user) {
//       res.redirect('/login');
//     } else if (!user.validPassword(password)) {
//       res.redirect('/login');
//     }
//   });
//
//
// });

module.exports = {
  new: newRoute,
  create: createRoute
};
