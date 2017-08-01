angular
  .module('propertyApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/views/properties/index.html',
      controller: 'PropertiesIndexCtrl as propertiesIndex'
    })
    .state('new', {
      url: '/properties/new',
      templateUrl: '/js/views/properties/new.html',
      controller: 'PropertiesNewCtrl as propertiesNew'
    })
    .state('propertiesShow', {
      url: '/properties/:id',
      templateUrl: '/js/views/properties/show.html',
      controller: 'PropertiesShowCtrl as propertiesShow'
    })
    .state('propertiesEdit', {
      url: '/properties/:id/edit',
      templateUrl: '/js/views/properties/edit.html',
      controller: 'PropertiesEditCtrl as propertiesEdit'
    });

  $urlRouterProvider.otherwise('/');

}
