const CardsRepository = require('../Repository/CardsRepository')

module.exports = async (request, response, next) => {
  const method = request.method
  const { id } = request.params

  if(!id) 
    return response.status(401).json({ messsage: 'Invalid Data' }) 

  try {
    const [ card ] = await CardsRepository.getById(id)
    
    if(card) {
      //Log at console
      const completeDate = new Date().toLocaleString('pt-Br')
      const action = method === 'DELETE' ? 'Removido' : 'Alterado'
      console.log(`${completeDate} - ${card.id} - ${card.titulo} - ${action}`)
      next()

    } else {
      console.log(id, `Id inexistente`)
      return response.status(404).json({message: 'Invalid ID'})
    } 
  } catch(err) {
    return response.status(400).json(err)
  }

}