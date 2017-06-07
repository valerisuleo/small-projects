// mongoose 2 require pkg again
const mongoose = require('mongoose');

// mongoose 2a SCHEMA (blueprint/cookie cutter)
const guitarSchema = new mongoose.Schema({
  brand: { type: String, required: true},
  model: { type: String, required: true},
  style: { type: String, required: true},
  image: { type: String },
  description: { type: String },
  rrp: {type: Number, required: true},
  create: Date
}, {
  // qui e' dove configuriamo in nostro cookie cutter.
  timestamp: true
});

// mongoose 2b we wanna export all this stuff into our server.js
module.exports = mongoose.model('Guitar', guitarSchema);

// mongoose 3 --> server.js
