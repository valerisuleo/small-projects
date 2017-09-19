angular
.module('coddio', ['ui.router'])
.controller('MainCtrl', MainCtrl)
// ___________________________________ROUTER___________________________________
.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/src/views/home.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: '/src/views/about.html'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: '/src/views/contact.html'
  });
  $urlRouterProvider.otherwise('/');
});


// _________________________________CONTROLLER_________________________________
MainCtrl.$inject = ['$rootScope'];
function MainCtrl($rootScope) {
  const vm = this;

  vm.onClick = function() {
    const clickMe = document.getElementById('clickMe');
    clickMe.play();
  };

  // vm.onMouseOver = function() {
  //   const cursor = document.getElementById('cursor');
  //   console.log('cursor', cursor);
  //   cursor.play();
  // };


  // THIS WORKS
  vm.hoverIn = function(event) {
    const menuClass = document.getElementById('manuela');
    const beat = document.getElementById('beat');
    var el = getElement(event);
    if (menuClass.classList.contains('active')) {
      el.addClass('heart');
      beat.play();
      // console.log('hoverIn', el);
    }
  };

  vm.hoverOut = function(event) {
    const beat = document.getElementById('beat');
    var el = getElement(event);
    el.removeClass('heart');
    beat.pause();
    // console.log('hoverOut', el);
  };

  function getElement(event) {
    return angular.element(event.srcElement || event.target);
  }


  // THIS DOES NOT WORK
  // vm.checkClass = function() {
  //   const menuClass = document.getElementById('manuela');
  //   // console.log('menuClass', menuClass);
  //   const circle = document.getElementsByClassName('circle');
  //   // console.log('circle', circle);
  //   for (var i = 0; i < circle.length; i++) {
  //     if (menuClass.classList.contains('active')) {
  //       circle[i].addEventListener('click', (e) => {
  //         var currentCircle = (e.target);
  //         console.log('currentCircle', currentCircle);
  //         currentCircle.classList.add('heart');
  //       });
  //     }
  //   }
  // };


// _________________________________WATCH STATE_________________________________
  function stateChange(e, toState) {
    vm.pageName = toState.name;
    console.log(vm.pageName);

    vm.menuOpen = false;
  }
  $rootScope.$on('$stateChangeStart', stateChange);
}
