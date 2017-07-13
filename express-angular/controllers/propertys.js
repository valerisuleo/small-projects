const Property = require('../models/property');


function indexRoute(req, res, next) {
  Property
    .find()
    .exec()
    .then((propertys) => res.json(propertys))
    .catch(next);
}


function createRoute(req, res, next) {
  Property
    .create(req.body)
    .then((property) => res.status(201).json(property))
    .catch(next);
}

function showRoute(req, res, next) {
  Property
    .findById(req.params.id)
    .exec()
    .then((property) => {
      if(!property) return res.notFound();
      res.json(property);
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Property
    .findById(req.params.id)
    .then((property) => {
      if(!property) return res.notFound();

      for(const field in req.body) {
        property[field] = req.body[field];
      }
      return property.save();
    })
    .then((property) => res.json(property))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Property
    .findById(req.params.id)
    .exec()
    .then((property) =>{
      if(!property) return res.notFound();
      return property.remove();
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
