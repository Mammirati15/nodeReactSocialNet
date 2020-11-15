const mongoose = require('mongoose')
const uuid = require('uuid')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  hashed_password: {
    type: String,    
    required: true
  },
  salt: String,
  created: {
    type: Date,
    default: Date.now
  },
  updated: Date
})

//virtual field
userSchema.virtual('password')
.set(function(password){
  //creating a temporary variable
  this._password = password
  //create timestamp
  this.salt = uuid.v1()
  // encrypt password
  this.hashed_password = this.encryptPassword(password)
})
.get(function(){
  return this._password
})

//encrypt password method
userSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) == this.hashed_password
  },

  encryptPassword: function(password) {
    if(!password) return ""
    try{
      return crypto.createHmac('sha1', this.salt)
                .update(password)
                .digest('hex')
    }
    catch(err){
      return ""
    }  
  }    
}    
  


module.exports = mongoose.model("User", userSchema)