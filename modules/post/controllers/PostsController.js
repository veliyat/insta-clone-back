const PostService = require('../PostService')

exports.uploadImage = (req, res) => {
  res.json({
    imageUrl: process.env.UPLOAD_PATH + req.file.filename
  })
}

exports.getAllPosts = (req, res) => {
  PostService.getAllPosts()
    .then((posts) => {
      res.json(posts)
    })
}

exports.getSinglePost = (req, res) => {
  PostService.getSinglePost(req.params.id)
    .then((post) => {
      if(post) {
        res.json(post)
      } else {
        res.status(404).json({
          message: 'Post Not Found'
        })
      }
    })
    .catch(err => {
      res.status(404).json({
        message: 'Post Not Found'
      })
    })
}

exports.createPost = (req, res) => {
  PostService.createPost(req.body)
    .then((post) => {
      res.json(post)
    })
}

exports.removePost = (req, res) => {
  PostService.removePost(req.params.id)
    .then((post) => {
      res.json({})
    })
}