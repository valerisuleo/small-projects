angular
  .module('expressAngular', [])
  .controller('PropertysCtrl', PropertysCtrl);

PropertysCtrl.$inject = ['$http'];
function PropertysCtrl($http) {
  const vm = this;
  vm.all = [];

  propertysIndex();

  function propertysIndex() {
    $http.get('http://localhost:3000/propertys')
    .then((response) => {
      console.log('response', response);
      vm.all = response.data;
    });
  }

  vm.newProperty = {};

  vm.propertyCreate = propertyCreate;
  vm.propertyDelete = propertyDelete;

  function propertyCreate() {
    $http.post('http://localhost:3000/propertys', vm.newProperty)
    .then((response) => {
      vm.all.push(response.data);
      vm.newProperty = {};
    });
  }

  function propertyDelete(property) {
    alert();
    $http.delete(`http://localhost:3000/propertys/${property.id}`)
    .then(() =>{
      const index = vm.all.indexOf(property);
      vm.all.splice(index,1);
    });
  }
}
