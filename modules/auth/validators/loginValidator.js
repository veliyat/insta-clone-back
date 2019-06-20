module.exports = (req, res, next) => {
  const data = req.body
  let errors = {}

  if(typeof data.username === 'undefined' || data.username === '') errors.username = 'Username can not be blank.'
  if(typeof data.password === 'undefined' || data.password === '') errors.password = 'Password can not be blank.'

  if(Object.keys(errors).length) {
    res.status(400).json(errors)
  } else {
    next()
  }
}