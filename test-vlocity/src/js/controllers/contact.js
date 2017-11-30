angular
.module('vlocityTest')
.controller('MainCtrl', MainCtrl);


MainCtrl.$inject = ['ContactFact', 'filterFilter', '$scope'];
function MainCtrl(ContactFact, filterFilter, $scope) {
  const vm = this;

// here we simulate a $http request to a server using the factories.
  vm.all = ContactFact.query();

  function filterContact() {
    vm.filtered = filterFilter(vm.all, vm.q); // add this instead of main.all
  }

  // filterContact();
  // we call it only once. We need something to watch the changes in the controllers properties -> $scope

  $scope.$watch(() => vm.q, filterContact);
  // $scope.$watch('q', filterContact);
}
