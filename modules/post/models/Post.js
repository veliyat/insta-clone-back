const { Schema, model } = require('mongoose')

const PostSchema = new Schema({
  caption: { type: String, required: true},
  description: { type: String },
  imageUrl: { type: String, required: true },
  published: { type: Boolean, default: true },
  createdBy: { type: String }
}, {
  timestamps: true
})

module.exports = model('Post', PostSchema)