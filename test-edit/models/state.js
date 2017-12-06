const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
  fridge: Number,
  temperature: Number,
  coffee: Number,
  mood: String

});

module.exports = mongoose.model('State', stateSchema);
