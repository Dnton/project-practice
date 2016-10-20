var mongoose = require('mongoose')
var bcrypt = require('bcrypt')


var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
  })

var User = mongoose.model('User', userSchema)

module.exports = User
