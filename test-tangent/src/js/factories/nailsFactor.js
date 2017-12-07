angular
.module('tangent-test')
.factory('NailsFactory', NailsFactory);

NailsFactory.$inject = [];
function NailsFactory() {
  const all = [{
    name: 'INC.redible',
    description: 'In A Dream World Iridescent Gloss Rainbow Hooves and Crazy Moves',
    price: 8,
    image: '/images/makeupOne.png'
  }, {
    name: 'INC.redible666',
    description: 'Jelly Shot Lip Quencher Watch Me Go',
    price: 8,
    image: '/images/makeupTwo.png'
  }, {
    name: 'Nails inc Fairytale Of Good Skin',
    description: 'Printed Sheet Mask Deluxe Gift Se',
    price: 19,
    image: '/images/makeupThree.png'
  }, {
    name: 'Nails inc Thirsty Hands Hand Cream',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    price: 15,
    image: '/images/makeupFour.png'
  }];
  return {
    query() {
      return all;
    }
  };
}
