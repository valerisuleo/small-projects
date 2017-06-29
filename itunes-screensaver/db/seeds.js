const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const Vinyl = require('../models/vinyl');
const User = require('../models/user');

Vinyl.collection.drop();
User.collection.drop();

User
  .create([{
    username: 'bigmama',
    email: 'bigmama@ga.co',
    password: 'asso',
    passwordConfirmation: 'asso'
  }])
  .then((users) => {
    console.log(`${users.length} users created`);
    return Vinyl
      .create([{
        artist: 'Incubus',
        album: 'Make Your Self',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51OhBstk3EL.jpg',
        genre: 'Alternative',
        createdBy: users[0]
      },{
        artist: 'Metallica',
        album: 'Black Album',
        image: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Metallica_-_Metallica_cover.jpg',
        genre: 'Metal',
        createdBy: users[0]
      },{
        artist: 'Muse',
        album: 'Black Hole',
        image: 'http://cps-static.rovicorp.com/3/JPG_500/MI0000/636/MI0000636429.jpg?partner=allrovi.com',
        genre: 'Rock',
        createdBy: users[0]
      },{
        artist: 'Metallica',
        album: 'Master of Puppets',
        image: 'https://up-1.cdn-fullscreendirect.com/production/photos/7549/large/20150806_195159_7549_752649.jpeg',
        genre: 'Metal',
        createdBy: users[0]
      },{
        artist: 'Metallica',
        album: 'Justice for All',
        image: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Metallica_-_...And_Justice_for_All_cover.jpg',
        genre: 'Metal',
        createdBy: users[0]
      },{
        artist: 'Metallica',
        album: 'Load',
        image: 'https://up-1.cdn-fullscreendirect.com/production/photos/7549/large/20150806_195123_7549_752578.jpeg',
        genre: 'Metal',
        createdBy: users[0]
      },{
        artist: 'Metallica',
        album: 'Reload',
        image: 'http://cps-static.rovicorp.com/3/JPG_500/MI0003/512/MI0003512439.jpg?partner=allrovi.com',
        genre: 'Metal',
        createdBy: users[0]
      },{
        artist: 'Metallica',
        album: 'Ride the Lightning',
        image: 'https://up-1.cdn-fullscreendirect.com/production/photos/7549/large/20150807_213911_7549_752890.jpeg',
        genre: 'Metal',
        createdBy: users[0]
      },{
        artist: 'Metallica',
        album: 'Garage Inc',
        image: 'https://upload.wikimedia.org/wikipedia/en/7/74/Metallica_-_Garage_Inc_cover.jpg',
        genre: 'Metal',
        createdBy: users[0]
      },{
        artist: 'Incubus',
        album: 'Science',
        image: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Incubus_Science.jpg',
        genre: 'Alternative',
        createdBy: users[0]
      },{
        artist: 'Incubus',
        album: 'Morning View',
        image: 'https://upload.wikimedia.org/wikipedia/en/6/68/Incubus_-_Morning_View.jpg',
        genre: 'Alternative',
        createdBy: users[0]
      },{
        artist: 'Incubus',
        album: 'Light Grenades',
        image: 'https://upload.wikimedia.org/wikipedia/en/0/0f/Incubus_-_Light_Grenades.jpg',
        genre: 'Alternative',
        createdBy: users[0]
      },{
        artist: 'Incubus',
        album: 'If not now when?',
        image: 'https://upload.wikimedia.org/wikipedia/en/2/22/If_not_now_when_album_cover.jpg',
        genre: 'Alternative',
        createdBy: users[0]
      },{
        artist: 'Incubus',
        album: '8',
        image: 'https://consequenceofsound.files.wordpress.com/2017/03/incubus-8-album-new-2017.jpg?quality=80&w=640',
        genre: 'Alternative',
        createdBy: users[0]
      },{
        artist: 'Incubus',
        album: 'A crow left to the murder',
        image: 'http://cdn-s3.allmusic.com/release-covers/500/0001/632/0001632464.jpg',
        genre: 'Alternative',
        createdBy: users[0]
      },{
        artist: 'Incubus',
        album: 'Fungus Amungus',
        image: 'https://upload.wikimedia.org/wikipedia/en/9/92/Fungus_amongus.jpg',
        genre: 'Alternative',
        createdBy: users[0]
      },{
        artist: 'Muse',
        album: 'The Resistance',
        image: 'https://muse-cdn.warnerartists.com/ugc-1/discography/discog/47/114_square.jpg',
        genre: 'Rock',
        createdBy: users[0]
      },{
        artist: 'Muse',
        album: 'Drones',
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/MuseDronesCover.jpg',
        genre: 'Rock',
        createdBy: users[0]
      },{
        artist: 'Muse',
        album: 'The Seconds Law',
        image: 'https://muse-cdn.warnerartists.com/siteimg/packshot/ugc-1/discography/discog/61/131_square.jpg',
        genre: 'Rock',
        createdBy: users[0]
      },{
        artist: 'Muse',
        album: 'Knights of Cydonia',
        image: 'https://s-media-cache-ak0.pinimg.com/736x/62/18/af/6218af2ea159c8ec8bc3fb95cddf3ff8--muse-knights-of-cydonia-soundcloud-music.jpg',
        genre: 'Rock',
        createdBy: users[0]
      },{
        artist: 'Muse',
        album: 'Origin of Symmetry',
        image: 'https://static.gigwise.com/gallery/4157013_6456020_museoos_666.jpg',
        genre: 'Rock',
        createdBy: users[0]
      },{
        artist: 'Muse',
        album: 'Time is Running out',
        image: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Muse_tirocd.jpg',
        genre: 'Rock',
        createdBy: users[0]
      },{
        artist: 'Iron Maiden',
        album: 'Live after death',
        image: 'http://assets.teamrock.com/image/d926083a-e0f0-4cfa-85f5-e6d9e06099a8?w=800',
        genre: 'Classic Metal',
        createdBy: users[0]
      },{
        artist: 'Iron Maiden',
        album: 'Somewhere in time',
        image: 'https://uproxx.files.wordpress.com/2015/09/iron-maiden-somewhere-in-time-1986.jpg?quality=100&w=650',
        genre: 'Classic Metal',
        createdBy: users[0]
      },{
        artist: 'Iron Maiden',
        album: 'Iron Maiden',
        image: 'https://uproxx.files.wordpress.com/2015/09/iron_maiden_1_remastered.jpg?quality=100&w=650',
        genre: 'Classic Metal',
        createdBy: users[0]
      },{
        artist: 'Iron Maiden',
        album: 'The trooper',
        image: 'https://s-media-cache-ak0.pinimg.com/736x/e8/09/a4/e809a47a8c3988ff5074861ba62ec52e--iron-maiden-album-covers-iron-maiden-eddie.jpg',
        genre: 'Classic Metal',
        createdBy: users[0]
      },{
        artist: 'Iron Maiden',
        album: 'The number of the beast',
        image: 'https://s-media-cache-ak0.pinimg.com/originals/e6/5a/7d/e65a7d1d60e52e9e99a92503c9719e2a.jpg',
        genre: 'Classic Metal',
        createdBy: users[0]
      },{
        artist: 'Iron Maiden',
        album: 'No prayer for the dying',
        image: 'https://e.snmc.io/lk/l/l/1d6bdcae2f501c6dd81447d0c349c788/2526333.jpg',
        genre: 'Classic Metal',
        createdBy: users[0]
      },{
        artist: 'Iron Maiden',
        album: 'Fear of the dark',
        image: 'http://assets.teamrock.com/image/06204744-aa80-4019-9f4b-d3adf2dd90ff?w=800',
        genre: 'Classic Metal',
        createdBy: users[0]
      },{
        artist: 'Iron Maiden',
        album: 'Brave new world',
        image: 'http://assets.teamrock.com/image/d82059f3-6320-4f7b-9491-06920471b577?w=800',
        genre: 'Classic Metal',
        createdBy: users[0]
      }]);
  })
  .then((vinyls) => console.log(`${vinyls.length} vinyls created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
