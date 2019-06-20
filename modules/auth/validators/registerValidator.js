var { isEmail } = require('validator')

module.exports = (req, res, next) => {
  const data = req.body
  let errors = {}

  if(typeof data.name === 'undefined' || data.name === '') errors.name = 'Name can not be blank.'
  
  if(typeof data.email === 'undefined' || data.email === '')  {
    errors.email = 'Email can not be blank.'
  } else if(!isEmail(data.email)) {
    errors.email = 'Email must be valid.'  
  }

  if(typeof data.username === 'undefined' || data.username === '') errors.username = 'Username can not be blank.'
  if(typeof data.password === 'undefined' || data.password === '') errors.password = 'Password can not be blank.'

  if(Object.keys(errors).length) {
    res.status(400).json(errors)
  } else {
    next()
  }
}