const AuthService = require('../AuthService')

exports.register = (req, res) => {
  AuthService.register(req.body).then(user => {
    res.json(user)  
  }).catch(err => {
    res.status(400).json(err)
  })
}

exports.login = async (req, res) => {
  const data = await AuthService.login(req.body)

  if(data.success) {
    res.json(data)
  } else {
    res.status(401).json(data)
  }
}

exports.logout = (req, res) => {

}