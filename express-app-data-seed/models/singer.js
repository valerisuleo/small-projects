// mongoose 2 require pkg again
const mongoose = require('mongoose');

// mongoose 2a SCHEMA (blueprint/cookie cutter)
const singerSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  band: {type: String, required: true},
  image: { type: String },
  genre: {type: String, required: true},
  description: { type: String },
  create: Date

}, {
  // qui e' dove configuriamo in nostro cookie cutter.
  timestamp: true
});

// mongoose 2b we wanna export all this stuff into our server.js
module.exports = mongoose.model('Singer', singerSchema);

// mongoose 3 --> server.
