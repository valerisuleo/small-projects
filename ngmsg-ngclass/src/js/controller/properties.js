// 4 we add ngResource instead of $http
angular
  .module('propertyApp')
  .controller('MainCtrl', MainCtrl)
  .controller('PropertiesIndexCtrl', PropertiesIndexCtrl)
  .controller('PropertiesShowCtrl', PropertiesShowCtrl)
  .controller('PropertiesEditCtrl', PropertiesEditCtrl);


PropertiesIndexCtrl.$inject = ['$resource'];
function PropertiesIndexCtrl($resource) {
  const vm = this;
  // vm.all = [];

// We make a module (like we do in express)
// we tell where it can find the property
  const Property = new $resource('/api/properties/:id', { id: '@id' }); // Here is where we tell resource where on the object can find the id


  // $http.get('/api/properties')
  // .then((response) => {
  //   vm.all = response.data;
  // });

  vm.all = Property.query(); // query is the equivalent of find. It's just gonna make a request to the index route.
  // since resource is very 'smart' we don't need to create an empty array anymore because resource will do the job for us. It will make an array and when the data comes back it will fill the array up with the data.
}



///////////////////////////////////// MAIN //////////////////////////////////////
MainCtrl.$inject = ['$resource', '$rootScope'];
function MainCtrl($resource, $rootScope) {
  const vm = this;
  vm.newProperty = {};


  const Property = new $resource('/api/properties/:id', { id: '@id' });

  vm.create = propertiesCreate;
  function propertiesCreate(myForm) {
    Property
      .save(vm.newProperty)
      .$promise
      .then(() => {
        if(myForm.$valid) {
          alert('Form submitted - fields passed validation');
        }
      });
  }

  function stateChange(e, toState) { //we have these 2 arguments by default

    // In english: every time you change pages using ui-router is gonna run this function and adapdate the value of the property (vm.pageName) to be the name of our state. So in the router.js home, contact, about those will be the value of vm.pageName.
    vm.pageName = toState.name;

  }
  $rootScope.$on('$stateChangeStart', stateChange);
}


///////////////////////////////////// SHOW /////////////////////////////////////
PropertiesShowCtrl.$inject = ['$resource','$stateParams', '$state'];
function PropertiesShowCtrl($resource, $stateParams, $state) {
  const vm = this;
  // vm.property = {};

  const Property = new $resource('/api/properties/:id', { id: '@id' }); // Here is where we tell resource where on the object can find the id

  // $http.get(`/api/properties/${$stateParams.id}`)
  // .then((response) => {
  //   console.log(response);
  //   vm.property = response.data;

  vm.property = Property.get($stateParams);


// DELETE
  function propertiesDelete() {
    vm.property
      .$remove()
      .then(() => $state.go('propertiesIndex'));
  }
  vm.delete = propertiesDelete;
}


//////////////////////////////////// EDIT /////////////////////////////////////
PropertiesEditCtrl.$inject = ['$resource','$stateParams', '$state'];
function PropertiesEditCtrl($resource,$stateParams, $state) {
  const vm = this;
  const Property = new $resource('/api/properties/:id', { id: '@id' }, {
    update: { method: 'PUT' }
    // query: { method: 'GET', isArray: true }
    // get: { method: 'GET' }
    // remove: { method: 'DELETE'}
  });
  vm.property = Property.get($stateParams);

// UPDATE
  function propertiesUpdate() {
    vm.property
      .$update()
      .then(() => $state.go('propertiesShow', $stateParams ));
  }
  vm.update = propertiesUpdate;
}
