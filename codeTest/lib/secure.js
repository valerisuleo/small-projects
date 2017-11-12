function secure(req, res, next) {
  if(!req.session.isAuthenticated || !req.session.userId) {
    return req.session.regenerate(() => {
      return res.redirect('/login');
    });
  }

  next();
}

module.exports = secure;
