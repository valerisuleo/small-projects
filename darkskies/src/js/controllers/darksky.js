
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



angular
.module('darkSkyApi')
.controller('DarkCtrl', DarkCtrl);

DarkCtrl.$inject = ['darkService'];
function DarkCtrl(darkService) {

  const vm = this;
  vm.sky = {};
  // vm.map = false;

  getForecast();

  function getForecast() {
    darkService.getForecastService(vm.lat, vm.lng)
    .then((response) => {
      vm.sky = response;
      console.log('vm.sky', vm.sky);
    });
  }
}
