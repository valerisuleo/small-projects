//////////////////////////////// SET UP SEEDS ////////////////////////////////

// 1  require mongoose
const mongoose = require('mongoose');

// 2 require bluebird for promises
mongoose.Promise = require('bluebird');

// 3 connect mongoose to db
const databaseURI = 'mongodb://localhost/express-app-data-seed';
mongoose.connect(databaseURI);

// 4 connecting seeds with the models
const Singer = require('../models/singer');
const Guitar = require('../models/guitar');

/////////////////////////////// CREATE INSTANCES ///////////////////////////////


// 1 Clean the db always
Singer.collection.drop();
Guitar.collection.drop();

// 2 create our instances

Singer.create([{
  firstName: 'Mike',
  lastName: 'Einziger',
  band: 'Incubus',
  genre: 'Nu Metal',
  image: '../images/mike.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  create: new Date()
},{
  firstName: 'Kirk',
  lastName: 'Hammet',
  band: 'Metallica',
  genre: 'Trash Metal',
  image: '../images/kirk.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  create: new Date()
},{
  firstName: 'Tom',
  lastName: 'Morello',
  band: 'Audioslave',
  genre: 'Grunge',
  image: '../images/tom.png',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  create: new Date()
}])
.then((singer) => {
  console.log(`${singer.length} singers created!`);

  return Guitar.create([{
    brand: 'Jackson',
    model: 'Randy Rhoads',
    style: 'Metal',
    rrp: 999.99,
    image: '../images/jack.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    create: new Date()

  },{
    brand: 'Gibson',
    model: 'Les Paul',
    style: 'Blues',
    rrp: 2999.99,
    image: '../images/gibson.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    create: new Date()

  },{
    brand: 'Fender',
    model: 'Stratocaster',
    style: 'Funk',
    rrp: 1999.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '../images/strato.jpg',
    create: new Date()
  }]);
})
  .then((guitar) => {
    console.log(`${guitar.length} guitars created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() =>{
    mongoose.connection.close();
  });
