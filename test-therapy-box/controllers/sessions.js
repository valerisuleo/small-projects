const { User } = require('../models/user');
const oauth = require('../config/oauth');

function sessionsNew(req, res) {
  res.render('sessions/new', { oauth });
}

function sessionsCreate(req, res, next) {
  const { email, password } = req.body;

  User
  .findOne({ where: { email: email } })
  .then((user) => {

    if (!user || !user.validPassword(password, user.password)) return res.redirect('/login');

    req.session.userId = user.id;
    req.session.isAuthenticated = true;
    req.session.user = user.dataValues;

    return res.redirect('/');
  })
  .catch(next);
}


module.exports = {
  new: sessionsNew,
  create: sessionsCreate
  // delete: sessionsDelete
};
