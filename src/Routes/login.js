const route = require('express').Router()
const LoginController = require('../Controller/LoginController')

route.post('/', LoginController.login)

module.exports = route