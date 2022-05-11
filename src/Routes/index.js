const route = require('express').Router()
const CardsController = require('../Controller/CardsController')
const LogMiddleware = require('../Middlewares/log')

route.get('/', CardsController.get)
route.post('/', CardsController.post)
route.patch('/:id', LogMiddleware, CardsController.update)
route.delete('/:id', LogMiddleware, CardsController.delete)

module.exports = route