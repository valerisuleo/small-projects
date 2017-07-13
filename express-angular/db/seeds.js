const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Property = require('../models/property');

const { dbURI } = require('../config/environment');

mongoose.connect(dbURI);

Property.collection.drop();

Property
  .create([{
    address: '30 Bow Common Lane',
    postcode: 'E34AX',
    bedrooms: 3,
    bathrooms: 3,
    askingPrice: 650.00,
    floorArea: 220,
    dateAvailable: '2017-10-11',
    image: 'https://lid.zoocdn.com/645/430/f9035eca8c8ea9d586fe5662aba8efd5939cc761.jpg'
  }, {
    address: '1 Battersea Square',
    postcode: 'SW113RZ',
    bedrooms: 2,
    bathrooms: 2,
    askingPrice: 1000,
    floorArea: 100,
    dateAvailable: '2017-08-11',
    image: 'https://lid.zoocdn.com/645/430/5f685e8f46d2958cfb1eac2e8eb0a846b324a30a.jpg'
  }, {
    address: '27 Villa Nobus',
    postcode: 'E14RES',
    bedrooms: 5,
    bathrooms: 2,
    askingPrice: 700,
    floorArea: 180,
    dateAvailable: '2017-11-21',
    image: 'https://lid.zoocdn.com/645/430/5d6c874c4f780de3efc37d8a2bba77ce960ef095.jpg'
  }])
  .then((propertys) => console.log(`${propertys.length} propertys created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
