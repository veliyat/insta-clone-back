const router = require('express').Router()
const { login, register } = require('./controllers/AuthController')

const loginValidator = require('./validators/loginValidator')
const registerValidator = require('./validators/registerValidator')

router.post('/login', [loginValidator, login])
router.post('/register', [registerValidator, register])

module.exports = router