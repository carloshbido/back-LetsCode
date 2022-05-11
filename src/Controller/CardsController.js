const CardsRepository = require('../Repository/CardsRepository')

class CardController {

  async get(request, response) {
    try {
      const cards = await CardsRepository.getAll()
      response.status(200).json(cards)
    } catch(err) {
      return response.status(401).json(err)
    }
  }

  async post(request, response) {
    const { titulo, conteudo, lista } = request.body

    if(!titulo || !conteudo || !lista) {
      response.status(404).json({message: 'Invalid Datas'})
    }

    try {

      await CardsRepository.insert({titulo, conteudo, lista})
      const [ card ] = await CardsRepository.getLastRegister() 
      response.status(200).json(card) 
    
    } catch(err) {
      response.status(400).json(err)
    }
  }

  async update(request, response) {
    const { id } = request.params
    const { titulo, conteudo, lista } = request.body

    if(!id ||!titulo || !conteudo|| !lista) {
      return response.status(404).json({message: 'Invalid Data'})
    }

    try{
      const [ card ] = await CardsRepository.getById(id)
      if(!card) {
        return response.status(404).json({message: 'Invalid ID'})
      }
  
      await CardsRepository.update(id, { titulo, conteudo, lista })
      const [ updatedCard ] = await CardsRepository.getById(id)
      return response.status(200).json(updatedCard)

    } catch(err) {
      return response.status(400).json(err)
    }
  }

  async delete(request, response) {
    const { id } = request.params

    if(!id) {
      return response.status(404).json({message: 'Invalid Data'})
    }

    try{
      const [ card ] = await CardsRepository.getById(id)
      if(!card) {
        return response.status(404).json({message: 'Invalid ID'})
      }

      await CardsRepository.delete(id)
      const cards = await CardsRepository.getAll()
      response.status(200).json(cards)

    } catch(err) {
      return response.status(400).json(err)
    }
  }
}

module.exports = new CardController()