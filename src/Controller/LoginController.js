const jwt = require('jsonwebtoken')

class LoginController {
   login(request, response) {
      const { login, senha } = request.body

      if(!login || !senha ) 
         return response.status(400).json({ message: "Bad Request"})

      if(login !== process.env.LOGIN || senha !== process.env.PASSWORD) 
         return response.status(401).json({ message: "Login and password invalid"})

      const token = jwt.sign({ user: login }, process.env.SECRET_KEY, { expiresIn: '8h' })
      return response.status(200).json(token)
   }
}

module.exports = new LoginController()