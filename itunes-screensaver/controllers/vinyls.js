const Vinyl = require('../models/vinyl');

// INDEX
function indexRoute(req, res, next) {
  Vinyl
    .find()
    .populate('createdBy')
    .exec()
    .then((vinyls) =>{
      res.render('vinyls/index', { vinyls });
    })
    .catch(next);
}

// CREATE
function createRoute(req, res) {

  req.body.createdBy = req.user;
  console.log(req.body);
  Vinyl
  .create(req.body)
.then(() => {
  res.redirect('/');
})
.catch((err) => {
  res.status(500).end(err);
});
}

// NEW
function newRoute(req, res) {
  res.render('vinyls/new');
}

// EDIT
function editRoute(req, res, next) {
  Vinyl
    .findById(req.params.id)
    .exec()
    .then((vinyl) => {
      return res.render('vinyls/edit', { vinyl });
    })
    .catch(next);
}

// SHOW
function showRoute(req, res, next) {
  Vinyl
    .findById(req.params.id)
    .populate('comments.createdBy') // inside the comments find all the createdBy properties and populate them. This will display the whole object (we don/t really want that...) so now inside the views/show we can type: <%= comment.createdBy.username %>
    .exec()
    .then((vinyl) => {
      if(!vinyl) return res.notFound();
      return res.render('vinyls/show', { vinyl });
    })
    .catch(next);
}


// UPDATE
function updateRoute(req, res, next) {
  Vinyl
    .findById(req.params.id)
    .exec()
    .then((vinyl) => {
      if(!vinyl) return res.notFound();

      for(const field in req.body) {
        vinyl[field] = req.body[field];
      }

      return vinyl.save();
    })
    .then(() => res.redirect(`/vinyls/${req.params.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') return res.badRequest(`/vinyls/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

// DELETE
function deleteRoute(req, res, next) {
  Vinyl
    .findById(req.params.id)
    .exec()
    .then((vinyl) => {
      if(!vinyl) return res.notFound();
      return vinyl.remove();
    })
    .then(() => res.redirect('/vinyls'))
    .catch(next);
}



//////////////////////////////// embedded controllers //////////////////////////
function createCommentRoute(req, res, next) {
  req.body.createdBy = req.user; // N.B. without this line comments will not works beecause it does not know who is the owner of the comments!!!
  Vinyl
    .findById(req.params.id)
    .exec()
    .then((vinyl) => {
      if(!vinyl) return res.notFound();

      vinyl.comments.push(req.body); // create an embedded record
      return vinyl.save();
    })
    .then((vinyl) => res.redirect(`/vinyls/${vinyl.id}`))
    .catch(next);
}

function deleteCommentRoute(req, res, next) {
  Vinyl
  .findById(req.params.id)
  .exec()
  .then((vinyl) => {
    if(!vinyl) return res.notFound();
    // get the embedded record by it's id
    const comment = vinyl.comments.id(req.params.commentId);
    comment.remove();

    return vinyl.save();
  })
  .then((vinyl) => res.redirect(`/vinyls/${vinyl.id}`))
  .catch(next);
}
///////////////////////////////////////////////////////////////////////////////
module.exports = {
  index: indexRoute,
  create: createRoute,
  new: newRoute,
  edit: editRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute,
  createComment: createCommentRoute,
  deleteComment: deleteCommentRoute
};
