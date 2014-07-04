var mongoose = require('mongoose')
  , bcrypt   = require('bcrypt')
  , Schema   = mongoose.Schema;

var userSchema = new Schema({

  email:    { type: String, required: true },
  password: { type: String, required: true },

});

// generating a hash
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

// create the model and expose it to our app
module.exports = mongoose.model('User', userSchema);
