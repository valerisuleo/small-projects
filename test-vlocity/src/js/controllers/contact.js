angular
.module('vlocityTest')
.controller('MainCtrl', MainCtrl);


MainCtrl.$inject = ['ContactFact'];
function MainCtrl(ContactFact) {
  const vm = this;

// here we simulate a $http request to a server using the factories.
  vm.all = ContactFact.query();


  // function displaySelectedUser() {
  //
  // }
}
