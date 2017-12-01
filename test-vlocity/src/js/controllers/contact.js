angular
.module('contactApp')
.controller('MainCtrl', MainCtrl);


MainCtrl.$inject = ['ContactFact', '$scope', 'filterFilter'];
function MainCtrl(ContactFact, $scope, filterFilter) {
  const vm = this;

  vm.all = ContactFact.query();
  console.log(vm.all);

  function filterContact() {
    vm.filtered = filterFilter(vm.all, vm.q); // add this instead of main.all
  }

  // filterContact();
  // we call it only once. We need something to watch the changes in the controllers properties -> $scope

  $scope.$watch(() => vm.q, filterContact);
  // $scope.$watch('q', filterContact);

  vm.selectedContact = vm.all[0];

  vm.selectContact = function (index) {
    vm.selectedContact = vm.all[index];
  };
}
