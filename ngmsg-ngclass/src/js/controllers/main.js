angular
  .module('portfolioApp')
  .controller('MainCtrl', MainCtrl)
  .controller('PropertiesIndexCtrl', PropertiesIndexCtrl)
  .controller('PropertiesShowCtrl', PropertiesShowCtrl);

MainCtrl.$inject = ['$rootScope'];
function MainCtrl($rootScope){
  const vm = this;

  vm.menuIsOpen = false; // when the page loads the menu is gonna be close

  function stateChange(e, toState) {
    // In english: every time you change pages using ui-router is gonna run this function and adapdate the value of the property (vm.pageName) to be the name of our state. So in the router.js home, contact, about those will be the value of vm.pageName.
    vm.pageName = toState.name;
    console.log(vm.pageName);

    vm.menuIsOpen = false;
    // console.log(vm.menuIsOpen);

  }

  $rootScope.$on('$stateChangeStart', stateChange);
}


///////////////////////////////////// INDEX ////////////////////////////////////
PropertiesIndexCtrl.$inject = ['$resource'];
function PropertiesIndexCtrl($resource) {

  const vm = this;
  // Here is where we tell resource where on the object can find the id
  const Property = new $resource('/api/properties/:id', { id: '@id' });

  vm.all = Property.query(); // query is the equivalent of find. It's just gonna make a request to the index route.
  // since resource is very 'smart' we don't need to create an empty array anymore because resource will do the job for us. It will make an array and when the data comes back it will fill the array up with the data.
}

///////////////////////////////////// SHOW /////////////////////////////////////
PropertiesShowCtrl.$inject = ['$resource','$stateParams'];
function PropertiesShowCtrl($resource, $stateParams) {

  const vm = this;
  const Property = new $resource('/api/properties/:id', { id: '@id' });

  vm.property = Property.get($stateParams);
}
