angular
  .module('portfolioApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(
    {
      enabled: true,
      requireBase: false
    });

  $stateProvider
  .state('homeState', {
    url: '/properties',
    templateUrl: '/js/views/index.html',
    controller: 'PropertiesIndexCtrl as propertiesIndex'
  })
  .state('showState', {
    url: '/properties/:id',
    templateUrl: '/js/views/show.html',
    controller: 'PropertiesShowCtrl as propertiesShow'
  })
  .state('about', {
    url: '/about',
    templateUrl: '/js/views/about.html'
  });

  $urlRouterProvider.otherwise('/properties');
}
