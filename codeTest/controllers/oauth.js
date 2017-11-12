const rp = require('request-promise');
const config = require('../config/oauth');

function facebook(req, res, next) {
  console.log(req.query.code);
  return rp({
    method: 'GET',
    url: config.facebook.accessTokenURL,
    qs: {
      client_id: config.facebook.clientId,
      client_secret: config.facebook.clientSecret,
      redirect_uri: 'http://localhost:3000/',
      code: req.query.code
    },
    json: true
  })
  .then((token) => {
    console.log(token);
    res.send();
  })
  .catch(next);
}

module.exports = {
  facebook
};
