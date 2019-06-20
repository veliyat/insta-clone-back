const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  if(req.method !== 'OPTIONS') {
    try {
      const token = req.headers.authorization.split(' ')[1]
      const user = jwt.verify(token, process.env.JWT_SECRET)   
    } catch(e) {
      res.status(401).json({
        msg: 'Unauthorized User'
      })
    }
  }
  next()
}