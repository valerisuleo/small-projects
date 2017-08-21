
angular
  .module('darkSkyApi')
  .service('darkService', DarkService);

DarkService.$inject = ['$http'];
function DarkService($http) {

  this.getForecastService = function getForecast(lat, lng) {
    return $http
    .get('/api/forecasts', { params: { lat, lng }})
    .then((response) => {
      const sky = response.data;

      sky.place = function() {
        return {
          // country: this.timezone.split('/')[0].replace(/_/g, ' '),
          city: this.timezone.split('/')[1].replace(/_/g, ' ')};
      };
      // console.log(sky.place());

      sky.temperature = function () {
        const temperatureConverted = 5 / 9 * (this.currently.temperature - 32);
        return Math.round(temperatureConverted) + '°C';
      };
      console.log(sky.temperature());

      sky.time = function() {
        const timeConverter = new Date(0);
        if (this.offset === 2) {
          timeConverter.setUTCSeconds(this.currently.time + (this.offset * 1800));
        } else {
          timeConverter.setUTCSeconds(this.currently.time);
        }
        return timeConverter;
      };
      return sky;
    });
  };
}
