const { User } = require('../models/user');

function newRoute(req, res) {
  res.render('registrations/new');
}


// 1 First, we need to write the logic that will create a new user:
function createRoute(req, res){
  User
  .create(req.body)
  .then(() => {
    res.redirect('/');
  })
 .catch((err) => {
   if(err.name === 'ValidationError') {
     //  if the passwords don't match we will re-render the form, and send an error message:
     return res.status(400).render('registrations/new', { message: 'Passwords do not match' });
   }
   res.status(500).end();
 });
}

module.exports = {
  new: newRoute,
  create: createRoute
};


// 2 Next, we need to hook the controller action to the /register path using our router: -->routes.js
