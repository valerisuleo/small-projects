angular
  .module('officeApp', [])
  .controller('StateCtrl', StateCtrl);

StateCtrl.$inject = ['$http']; // We tell the controller we intend to use this library called $http
function StateCtrl($http) { //  here we pass the library in and gives it the name $http
  const vm = this;
  vm.all = [];

  getState();

  function getState() {
    $http.get('http://localhost:3000/state')
    // now because what return is a promise we can chain with a .then:
    .then((response) => {
      // console.log('response', response);
      vm.state = response.data[0];
    });
  }
}
