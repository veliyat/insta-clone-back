const Post = require('./models/Post')

exports.getAllPosts = () => {
  return Post.find()
}

exports.getSinglePost = (id) => {
  return Post.findById(id)
}

exports.createPost = (post) => {
  return Post.create(post)
}

exports.removePost = (id) => {
  return Post.findByIdAndRemove(id)
}