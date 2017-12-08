angular
.module('tangent-test')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['NailsFactory', '$window'];
function MainCtrl(NailsFactory, $window) {
  const vm = this;

  vm.all = NailsFactory.query();
  console.log('all', vm.all);

  vm.myInterval = 2000; // The time delay between each slide
  vm.noWrapSlides = false; // This will decide whether or not the carousel is 'infinite' or not, i.e whether you can keep going round in a loop with the arrow buttons
  vm.active = 0; // This decides which slide is shown first (based on it's index in the array of slides)


  angular.element($window);
  console.log(window);

  $window.onscroll = function() {
    const dollarHeader = document.getElementById('dollar-header');
    console.log(dollarHeader);
    var scrollPos = document.documentElement.scrollTop;
    console.log(scrollPos);
    var mydivpos = document.getElementById('info').offsetTop;
    // console.log(mydivpos);
    if(scrollPos >= mydivpos) {
      // console.log('fire!');
      dollarHeader.classList.add('opaque');
    } else {
      dollarHeader.classList.remove('opaque');
    }
  };


// Toggle mobile navbar
  vm.mobileNavBar = function () {
    vm.mobileOpen = !vm.mobileOpen;
  };

}
