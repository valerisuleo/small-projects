const mongoose = require('mongoose');

//////////////////////////////////// embedded //////////////////////////////////
const commentSchema = new mongoose.Schema({
  title: { type: String, required: true},
  content: { type: String, required: true},
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User', required: true}
},{
  timestaps: true
});

commentSchema.methods.ownedBy = function ownedBy(user){
  return this.createdBy.id === user.id;
};

////////////////////////////////////////////////////////////////////////////////

const vinylSchema = new mongoose.Schema({
  artist: {type: String},
  album: {type: String},
  image: {type: String},
  genre: {type: String},
  // this is a REFERENCED
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true}, // type needs to be an 'Object_Id' and since object Id is not a javascript thing we need to use mongoose
  comments: [commentSchema] // comments will be an array of objects
});

module.exports = mongoose.model('Vinyl', vinylSchema);
