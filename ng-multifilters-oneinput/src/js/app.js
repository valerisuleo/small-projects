angular
.module('asso', [])
.controller('PhoneCtrl', PhoneCtrl);


PhoneCtrl.$inject = ['$scope'];
function PhoneCtrl($scope) {
  const vm = this;
  vm.all = smartphones;

  $scope.asso = function (row) {
    return (angular.lowercase(row.brand).indexOf(angular.lowercase(vm.q) || '') !== -1 ||
            angular.lowercase(row.model).indexOf(angular.lowercase(vm.q) || '') !== -1);
  };
}

var smartphones = [{
  brand: 'Apple',
  model: 'iPhone 4S',
  price: '999'
},{
  brand: 'Samsung',
  model: 'SIII',
  price: '888'
},{
  brand: 'LG',
  model: 'Optimus',
  price: '777'
},{
  brand: 'htc',
  model: 'Desire',
  price: '666'
},{
  brand: 'Nokia',
  model: 'N9',
  price: '555'}
];
