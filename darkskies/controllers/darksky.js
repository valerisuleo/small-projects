const rp = require('request-promise');

function forecasts(req, res) {
  const baseUrl = `https://api.darksky.net/forecast/`;
  const apiKey = process.env.DARKSKY_API_KEY;
  rp({
    method: 'GET',
    url: `${baseUrl}${apiKey}/51.515559,-0.071746`,
    json: true
  })
  .then((response) => {
    res.status(200).json(response);
    // console.log(response);
  })
  .catch((err) => {
    res.status(500).json(err);
  });
}

module.exports = {
  forecasts
};
