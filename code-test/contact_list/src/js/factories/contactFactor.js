angular
.module('contactApp')
.factory('ContactFact', ContactFact);

ContactFact.$inject = [];
function ContactFact() {
  const allContacts = [{
    name: 'Adrian Welch',
    image: '/images/adrian.jpg',
    mostLikelyTo: 'Inherit a grape juice estate.',
    likes: {
      sport: 'bowling',
      celebrities: 'Johnny Walker',
      tvseries: 'Game of Thrones',
      pet: 'Drogon'
    },
    dislikes: {
      sport: 'swimming',
      celebrities: 'Prime Minister May',
      tvseries: 'Stranger Things 2',
      pet: 'Doraemon'
    }
  }, {
    name: 'Alice Marshall',
    image: '/images/alice.jpg',
    mostLikelyTo: 'Climb Everest without equipment.',
    likes: {
      sport: 'tennis',
      celebrities: 'the queen',
      tvseries: 'the crown',
      pet: 'Dire Wolf'
    },
    dislikes: {
      sport: 'hicking',
      celebrities: 'Silvio Berlusconi',
      tvseries: 'The Flash',
      pet: 'cats'
    }
  }, {
    name: 'Ben Currie',
    image: '/images/ben.jpg',
    mostLikelyTo: 'Organise a flash dance.',
    likes: {
      sport: 'box',
      celebrities: 'Madonna',
      tvseries: 'Vikings',
      pet: 'horses'
    },
    dislikes: {
      sport: 'swording',
      celebrities: 'Donald Trump',
      tvseries: 'The Walking Dead',
      pet: 'zombies'
    }
  }, {
    name: 'Conor Heena',
    image: '/images/conor.jpg',
    mostLikelyTo: 'Be upset that the anime dream she had was just a dream.',
    likes: {
      sport: 'cycling',
      celebrities: 'Sasha Grey',
      tvseries: 'Breaking Bad',
      pet: 'batman'
    },
    dislikes: {
      sport: 'running',
      celebrities: 'Justin Bieber',
      tvseries: 'Attack On Titan',
      pet: 'Pegasus'
    }
  }, {
    name: 'Fabricio Ferreria',
    image: '/images/fab.jpg',
    mostLikelyTo: 'Never impart his hair secrets.',
    likes: {
      sport: 'golf',
      celebrities: 'Jennifer Lawrence',
      tvseries: 'Better Call Soul',
      pet: 'sharks'
    },
    dislikes: {
      sport: 'free climbing',
      celebrities: 'Adele',
      tvseries: 'Friends',
      pet: 'Nick Carter'
    }
  }, {
    name: 'Giacomo Brunetti',
    image: '/images/jack.jpg',
    mostLikelyTo: 'Secretly be able to lift car over his head.',
    likes: {
      sport: 'Snowboard',
      celebrities: 'Tom Ford',
      tvseries: 'Mr. Pickels',
      pet: 'dog'
    },
    dislikes: {
      sport: 'Mortal Kombat',
      celebrities: 'Britney Spears',
      tvseries: 'Vampires Diary',
      pet: 'Scrybs Spirit'
    }
  }];
  return {
    query() {
      return allContacts;
    }
  };
}
