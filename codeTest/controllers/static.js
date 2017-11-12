const User = require('../models/user');
function indexRoute(req, res) {
  User
    .all()
    .then(users => {
      res.status(200).render('index', { users });
    });
}

module.exports = {
  index: indexRoute
};
