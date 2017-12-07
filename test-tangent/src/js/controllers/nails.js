angular
.module('tangent-test')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['NailsFactory'];
function MainCtrl(NailsFactory) {
  const vm = this;

  vm.all = NailsFactory.query();
  console.log('all', vm.all);

  vm.myInterval = 5000; // The time delay between each slide
  vm.noWrapSlides = false; // This will decide whether or not the carousel is 'infinite' or not, i.e whether you can keep going round in a loop with the arrow buttons
  vm.active = 0; // This decides which slide is shown first (based on it's index in the array of slides)

// If we update vm.active = 0 to be vm.active = 3, this will change which bird the carousel starts on when the page loads.
// If we update vm.myInterval = 5000 to be vm.myInterval = 2000 the delay between the slides will be 2 seconds rather than 5.
// If we update vm.noWrapSlides = false to be vm.noWrapSlides = true, once we hit the last slide we can't loop back to the first.

}
