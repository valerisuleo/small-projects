angular
.module('coddio', ['ui.router'])
.controller('MainCtrl', MainCtrl)
.controller('AboutCtrl', AboutCtrl)
.controller('ContactCtrl', ContactCtrl)
// ___________________________________ROUTER___________________________________
.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(false);
  // $locationProvider.hashPrefix('');

  $stateProvider
  .state('portfolio', {
    url: '/portfolio',
    templateUrl: '/src/views/portfolio.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: '/src/views/about.html',
    controller: 'AboutCtrl as about'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: '/src/views/contact.html',
    controller: 'ContactCtrl as contact'
  })
  .state('index', {
    url: '/'
  });
  $urlRouterProvider.otherwise('/');
});

// __________________________________MAIN CTRL________________________________
MainCtrl.$inject = ['$rootScope'];
function MainCtrl($rootScope) {
  const vm = this;

// Here we reload the index page everytime we land on it
  // vm.reload = function () {
  //   location.reload(true);
  // };

// When we click on the black circle...
  vm.onClick = function() {

    vm.menuOpen = true;
    // vm.menuOpen = !vm.menuOpen;

    const clickMe = document.getElementById('clickMe');
    clickMe.play();

    removeAttr();

    const black = document.getElementById('black');
    black.addEventListener('webkitTransitionEnd', () => {
      setAttr();
    });
  };

// Toggle mobile navbar
  vm.mobileNavBar = function () {
    vm.mobileOpen = !vm.mobileOpen;
  };

// Here we animate the black circle only when the navbar is closed.
  function breakbeat() {
    const black = document.getElementById('black');
    const beat = document.getElementById('beat');
    // console.log('breakbeat', black);
    if (!black.classList.contains('active')) {
      black.classList.add('heart');
      beat.play();
      black.addEventListener('click', () => {
        black.classList.remove('heart');
        beat.pause();
      });
    }
  }



// _____________________________JS ONCE FUNCTION_______________________________

  function once(fn, context) {
    var result;

    return function() {
      if(fn) {
        result = fn.apply(context || this, arguments);
        fn = null;
      }

      return result;
    };
  }

// REMOVE ATTRIBUTE
  var removeAttr = once(function() {
    const remove = document.getElementById('wow');
    remove.removeAttribute('href');
    // console.log('remove', remove);
  });

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// PUT THE ATTRIBUTE BACK
  function setAttr() {
    const set = document.getElementById('wow');
    set.setAttribute('href', '/portfolio');
    // console.log('set', set);
  }

// _________________________________MOUSE OVER_________________________________

  vm.hoverIn = function(event) {
    const menuClass = document.getElementById('black');
    const beat = document.getElementById('beat');
    // console.log(beat);
    const cursor = document.getElementById('cursor');
    var el = getElement(event);
    if (menuClass.classList.contains('active')) {
      el.addClass('heart');
      beat.play();
      removeSpanClass();
      // console.log('hoverIn', el);
    }
    cursor.play();
    breakbeat();
  };

  vm.hoverOut = function(event) {
    const beat = document.getElementById('beat');
    var el = getElement(event);
    el.removeClass('heart');
    beat.pause();
    addSpanClass();
    // console.log('hoverOut', el);
  };

  function getElement(event) {
    return angular.element(event.srcElement || event.target);
  }


// SHOW AND HIDE THE SPAN
  const span = document.getElementsByTagName('span');
  const circle = document.getElementsByClassName('circle');

  function removeSpanClass() {
    for (var i = 0; i < circle.length; i++) {
      if (circle[i].classList.contains('heart')) {
        span[i].classList.remove('hidden');
      }
    }
  }

  function addSpanClass() {
    for (var i = 0; i < circle.length; i++) {
      if (!circle[i].classList.contains('heart')) {
        span[i].classList.add('hidden');
      }
    }
  }

// _________________________________WATCH STATE_________________________________
  function stateChange(e, toState) {
    vm.pageName = toState.name;
    console.log(vm.pageName);

    // vm.menuOpen = false;
    vm.mobileOpen = false;
  }
  $rootScope.$on('$stateChangeStart', stateChange);
  // $state.reload();
}


// _________________________________ABOUT CTRL_________________________________
AboutCtrl.$inject = ['$window'];
function AboutCtrl($window) {
  // const vm = this;


  var bars = document.getElementsByClassName('progress-bar');
  function barCharts () {
    for (var i = 0; i < bars.length; i++) {
      bars[i].children[0].style.width = bars[i].dataset.percent;
      // console.log(bars[i].dataset);
      bars[i].children[1].innerHTML = bars[i].dataset.label;
    }
  }

  // function resetBarCharts() {
  //   const test = document.getElementById('test');
  //   test.addEventListener('webkitTransitionEnd', () => {
  //     for (var i = 0; i < bars.length; i++) {
  //       bars[i].children[0].style.width = '';
  //     // bars[i].children[1].innerHTML = '';
  //     }
  //   });
  // }

  $window.onscroll = function() {
    var scrollPos = document.documentElement.scrollTop;
    // console.log('scrollPos', scrollPos);
    var mydivpos = document.getElementById('please').offsetTop;
    // console.log('mydivpos', mydivpos);

    if(scrollPos >= mydivpos) {
      console.log('not fire');
      barCharts();
    }
  };

// IPHONE 5
  var w = angular.element($window);
  w.bind('resize', function () {
    console.log(window.innerWidth);

    var width = window.innerWidth;
    const pirla = document.getElementById('pirla');

    if (width <= 320) {
      pirla.style.top = '150px';
    } else {
      pirla.style.top = 'calc(48% - 110px)';
    }
  });
}


// ____________________________ CONTACT CTRL_________________________________
function ContactCtrl() {
  const vm = this;

  vm.mobileNavBar = function () {
    vm.mobileOpen = !vm.mobileOpen;
  };

  vm.hoverIn = function(event) {
    var el = getElement(event).parent();
    // console.log(el);
    el.addClass('flipped');
    // console.log('hoverIn', el);
  };

  vm.hoverOut = function(event) {
    var el = getElement(event).parent().parent().parent();
    el.removeClass('flipped');
    // console.log('hoverOut', el);
  };

  function getElement(event) {
    return angular.element(event.srcElement || event.target);
  }

  vm.contactClick = function () {
    const classCard = document.getElementById('classCard');
    classCard.classList.add('flipped');
  };
}
