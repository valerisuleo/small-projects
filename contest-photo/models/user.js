// require pkg
const hyena = require('hyena');
const Schema = hyena.Schema;

// create a schema (the blueprint)
const userSchema = new Schema({
  firsName: String,
  lastName: String,
  email: { type: String, required: true, unique: true},
  dob: Date
});


// 6 An instance .methods
userSchema.methods.fullName = function fullName() {
  return `${this.firsName} ${this.lastName}`;
};

// 7 a class .methods (static)
// userSchema.statics.all = function all(callback) {
//   return this.find({}, callback);
// };




// export al this stuff into the server.js file
module.exports = hyena.model('User', userSchema);
