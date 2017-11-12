const { User, Image } = require('../models/user');

function imageForm(req, res) {
  res.render('image/form');
}

function imageUpload(req, res, next) {
  if(req.file) req.body.image = req.file.key;
  req.body.userId = req.session.userId; // takes the session userId ad sets it to the body

  Image.create(req.body)
    .then(() => res.status(201).redirect('/'))
    .catch((err) => {
      next(err);
    });
}

function gallery(req, res) {
  Image
  .all()
  .then(images => {
    res.status(200).render('image/gallery', { images });
  });
}

module.exports = { imageForm, imageUpload, gallery };
