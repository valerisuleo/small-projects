const Wonder = require('../models/wonder');

// WITH ANGULAR WE DONT NEED EDIT AND NEW ROUTE ANYMORE!

function indexRoute(req, res, next) {
  Wonder
    .find()
    .exec()
    .then((wonders) => res.json(wonders))
    .catch(next);
}

function createRoute(req, res, next) {
  Wonder
    .create(req.body)
    .then((wonder) => res.status(201).json(wonder))
    .catch(next);
}

function showRoute(req, res, next) {
  Wonder
    .findById(req.params.id)
    .exec()
    .then((wonder) => {
      if(!wonder) return res.notFound();
      res.json(wonder);
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Wonder
    .findById(req.params.id)
    .then((wonder) => {
      if(!wonder) return res.notFound();

      for(const field in req.body) {
        wonder[field] = req.body[field];
      }
      return wonder.save();
    })
    .then((wonder) => res.json(wonder))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Wonder
    .findById(req.params.id)
    .exec()
    .then((wonder) => {
      if(!wonder) return res.notFound();
      return wonder.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);

}


module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};

// 9 touch config/routes.js
