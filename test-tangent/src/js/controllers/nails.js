angular
.module('tangent-test')
.controller('MainCtrl', MainCtrl);

function MainCtrl() {
  const vm = this;

  vm.message = 'hey guys!';
}
