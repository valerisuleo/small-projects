'use strict';

angular.module('coddio', ['ui.router']).controller('MainCtrl', MainCtrl)
// ___________________________________ROUTER___________________________________
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: '/src/views/home.html'
  }).state('about', {
    url: '/about',
    templateUrl: '/src/views/about.html'
  }).state('contact', {
    url: '/contact',
    templateUrl: '/src/views/contact.html'
  });
  $urlRouterProvider.otherwise('/');
});

// _________________________________CONTROLLER_________________________________
MainCtrl.$inject = ['$rootScope'];
function MainCtrl($rootScope) {
  var vm = this;

  vm.onClick = function () {

    vm.menuOpen = true;
    // vm.menuOpen = !vm.menuOpen;

    var clickMe = document.getElementById('clickMe');
    clickMe.play();

    removeAttr();

    var black = document.getElementById('black');
    black.addEventListener('webkitTransitionEnd', function () {
      setAttr();
    });
  };

  // _____________________________JS ONCE FUNCTION_____________________________

  function once(fn, context) {
    var result;

    return function () {
      if (fn) {
        result = fn.apply(context || this, arguments);
        fn = null;
      }

      return result;
    };
  }

  // REMOVE ATTRIBUTE
  var removeAttr = once(function () {
    var remove = document.getElementById('wow');
    remove.removeAttribute('href');
    console.log('remove', remove);
  });
  // _____________________________________________________________________________


  // PUT THE ATTRIBUTE BACK
  function setAttr() {
    var set = document.getElementById('wow');
    set.setAttribute('href', '/home');
    console.log('set', set);
  }

  // _________________________________MOUSE OVER_________________________________

  vm.hoverIn = function (event) {
    var menuClass = document.getElementById('black');
    var beat = document.getElementById('beat');
    var el = getElement(event);
    if (menuClass.classList.contains('active')) {
      el.addClass('heart');
      beat.play();
      console.log('hoverIn', el);
    }
  };

  vm.hoverOut = function (event) {
    var beat = document.getElementById('beat');
    var el = getElement(event);
    el.removeClass('heart');
    beat.pause();
    console.log('hoverOut', el);
  };

  function getElement(event) {
    return angular.element(event.srcElement || event.target);
  }

  // _________________________________WATCH STATE_________________________________
  function stateChange(e, toState) {
    vm.pageName = toState.name;
    console.log(vm.pageName);

    vm.menuOpen = false;
  }
  $rootScope.$on('$stateChangeStart', stateChange);
}