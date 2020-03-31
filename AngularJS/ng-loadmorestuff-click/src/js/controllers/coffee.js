angular
  .module('morecoffee')
  .controller('CoffeeIndexCtrl', CoffeeIndexCtrl);

CoffeeIndexCtrl.$inject = ['Coffee'];
function CoffeeIndexCtrl(Coffee) {
  const vm = this;
  vm.cruise = Coffee.query();
  console.log(vm.cruise);
  vm.limit = 3;

  function loadMore() {
    var increamented = vm.limit + 3;
    vm.limit = increamented > vm.cruise.length ? vm.cruise.length : increamented;
  }
  vm.more = loadMore;
}
