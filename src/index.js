const express = require('express')
const app = express()
require('dotenv').config()

// Internal imports
const authMiddleware = require('./Auth')
const { initDataBase } = require('./DataBase')
const PORT = process.env.PORT || 5000

// Express format Data middlewares
app.use(express.json())

//Routes
app.use('/login', require('./Routes/login'))
app.use(authMiddleware)
app.use('/cards', require('./Routes'))

//DB and Server
initDataBase()
  .then(console.log('SqLite running'))
  .catch(err => console.log(err))
app.listen(PORT, (err) => {
  err 
    ? console.log('Error to connect to the server at port:', PORT)
    : console.log('Server running at port:', PORT)
})

