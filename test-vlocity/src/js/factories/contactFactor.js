angular
.module('contactApp')
.factory('ContactFact', ContactFact);

ContactFact.$inject = [];
function ContactFact() {
  const allContacts = [{
    name: 'Adrian Welch',
    image: '/images/adrian.jpg',
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
