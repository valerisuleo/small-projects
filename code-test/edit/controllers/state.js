const State = require('../models/state');

function indexRoute(req, res, next) {
  State
    .find()
    .then((state) => res.json(state))
    .catch(next);
}


module.exports = {
  index: indexRoute
};
