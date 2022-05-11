const jwt = require('jsonwebtoken')

module.exports = (request, response, next) => {
  const headerAuth = request.headers.authorization
  const [,token] = headerAuth.split(' ')

  if(!token) return response.status(401).json({message: "Unauthorized"})
  
  try {
  
    jwt.verify(token, process.env.SECRET_KEY)
    next()

  } catch(err) {
    return response.status(401).json(err)
  }

}