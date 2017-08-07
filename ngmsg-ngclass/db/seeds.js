const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Property = require('../models/property');

const { dbURI } = require('../config/environment');

mongoose.connect(dbURI);

Property.collection.drop();

Property
  .create([{
    address: '30 Bow Common Lane',
    name: 'Linea Court',
    postcode: 'E34AX',
    bedrooms: 3,
    bathrooms: 3,
    askingPrice: 650.00,
    floorArea: 220,
    dateAvailable: '2017-10-11',
    image: 'http://homeepiphany.s3.amazonaws.com/wp-content/uploads/2015/07/127-Luxury-Living-Room-Designs-title.jpg'
  }, {
    address: '1 Battersea Square',
    name: 'Sexy House',
    postcode: 'SW113RZ',
    bedrooms: 2,
    bathrooms: 2,
    askingPrice: 1000,
    floorArea: 100,
    dateAvailable: '2017-08-11',
    image: 'http://s3-us-west-2.amazonaws.com/sola-images/wp-content/uploads/2015/09/09230808/Masonite_VistaGrande_Double_Door_Pool.56094dbdbe88e-1024x701.png'
  }, {
    address: '27 Villa Nobus',
    name: 'Manson House',
    postcode: 'E14RES',
    bedrooms: 5,
    bathrooms: 2,
    askingPrice: 700,
    floorArea: 180,
    dateAvailable: '2017-11-21',
    image: 'http://www.idesignarch.com/wp-content/uploads/Luxury-Indoor-Pool-Ideas_6.jpg'
  }])
  .then((properties) => console.log(`${properties.length} properties created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
