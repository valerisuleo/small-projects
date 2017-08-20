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

      sky.time = function() {
        const timeConverter = new Date(0);
        timeConverter.setUTCSeconds(this.currently.time + (this.offset * 3600));
        return timeConverter;
      };
      return sky;
    });
  };
}
