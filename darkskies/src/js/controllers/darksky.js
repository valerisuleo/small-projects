/* global google: true */


// ____________________________Before inject Service____________________________

// DarkCtrl.$inject = ['$http'];
// function DarkCtrl($http) {
//
//   const vm = this;
//   vm.sky = {};
//
//   $http.get('/api/forecasts')
//   .then((response) => {
//     vm.sky = response.data;
//     console.log('vm.sky', vm.sky);
//   });
// }

// ____________________________After injected Service___________________________

angular
.module('darkSkyApi')
.controller('DarkCtrl', DarkCtrl);

DarkCtrl.$inject = ['darkService'];
function DarkCtrl(darkService) {

  const vm = this;
  vm.sky = {};

  // In questo modo nel server side possiamo sostituire:
    // url: `${baseUrl}${apiKey}/51.515559,-0.071746`,
  // con:
    // url: `${baseUrl}${apiKey}/${req.query.lat},${req.query.lng}`,
  vm.lat = 51.5153;
  vm.lng = -0.0725;

  vm.newPlace = {};

  getForecast();

  function getForecast() {
    darkService.getForecastService(vm.lat, vm.lng)
    .then((response) => {
      vm.sky = response;
      console.log('vm.sky', vm.sky);
    });
  }
  vm.meteo = getForecast;

// ________________________________Autocomplete________________________________
  const input = document.getElementById('autocomplete');
  const autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.addListener('place_changed', function () {
    const place = autocomplete.getPlace();
    console.log('place', place);
    vm.lat = place.geometry.location.toJSON().lat;
    vm.lng = place.geometry.location.toJSON().lng;
  });
}
