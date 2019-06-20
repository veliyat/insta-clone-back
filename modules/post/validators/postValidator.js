module.exports = (req, res, next) => {
  const data = req.body
  let errors = {}

  if(typeof data.caption === 'undefined' || data.caption === '') errors.caption = 'Post Caption can not be blank.'
  if(typeof data.imageUrl === 'undefined' || data.imageUrl === '') errors.imageUrl = 'Image Url Can not be blank.'
  if(typeof data.createdBy === 'undefined' || data.createdBy === '') errors.createdBy = 'Invalid User'

  if(Object.keys(errors).length) {
    res.status(400).json(errors)
  } else {
    next()
  }
}