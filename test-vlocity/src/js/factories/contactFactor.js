angular
.module('vlocityTest')
.factory('ContactFact', ContactFact);

ContactFact.$inject = [];
function ContactFact() {
  const allContacts = [{
    id: '110866',
    name: 'Adrian Welch',
    image: '/images/adrian.jpg',
    likes: ['swim suits', 'digital cameras', 'game of thrones', 'dogs' ]
  }, {
    id: '111047',
    name: 'Alice Marshall',
    image: '/images/alice.jpg',
    likes: ['tennis', 'the queen', 'the crown', 'cats' ]
  }, {
    id: '274233',
    name: 'Ben Currie',
    image: '/images/ben.jpg',
    likes: ['rock chairs', 'MacBook', 'HIMYM', 'Lions' ]
  }, {
    id: '329441',
    name: 'Conor Heena',
    image: '/images/conor.jpg',
    likes: ['basket', 'road bikes', 'vikings', 'ninja turtles' ]
  }, {
    id: '111054',
    name: 'Fabricio Ferreria',
    image: '/images/fab.jpg',
    likes: ['tennis table', 'php', 'x-factor', 't-rex' ]
  }, {
    id: '329458',
    name: 'Giacomo Brunetti',
    image: '/images/jack.jpg',
    likes: ['suits', 'linux', 'friends', 'horses' ]
  }];
  return {
    query() {
      return allContacts;
    }
  };
}
