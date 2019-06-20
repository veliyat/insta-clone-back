const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  active: { type: Boolean, default: true }
}, {
  timestamps: true
})

UserSchema.methods.genToken = function() {
  const token = jwt.sign({
    id: this._id,
    name: this.name,
    email: this.email,
  }, process.env.JWT_SECRET)

  return token
}

UserSchema.methods.genUserObject = function() {
  const token = this.genToken()
  return {
    id: this._id,
    name: this.name,
    email: this.email,
    token
  }
}

UserSchema.methods.genPasswordHash = function (password) {
  const salt = bcrypt.genSaltSync(10)
  this.passwordHash = bcrypt.hashSync(password, salt)
}

UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash)
}

module.exports = model('User', UserSchema)