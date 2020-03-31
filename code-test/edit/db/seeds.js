const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const State = require('../models/state');

const { dbURI } = require('../config/environment');

mongoose.connect(dbURI);

State.collection.drop();

State
  .create([{
    fridge: 8,
    temperature: 22.5,
    coffee: 2,
    mood: 'good'
  }])
  .then((state) => console.log(`${state.length} state created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
