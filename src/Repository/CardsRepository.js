const { openDataBase, query } = require('../DataBase')

class CardsRepository {
  async getById(id) { 
    const db = await openDataBase(process.env.DATABASE)
    const result = await query(db, 'SELECT id, titulo, conteudo, lista lista FROM card WHERE id = ?', id)
    return result
  }

  async getLastRegister() { 
    const db = await openDataBase(process.env.DATABASE)
    const result = await query(db, 'SELECT id, titulo, conteudo, lista FROM card ORDER BY id DESC LIMIT 1')
    return result
  }

  async getAll() {
    const db = await openDataBase(process.env.DATABASE)
    const result = await query(db, `SELECT id, titulo, conteudo, lista FROM card`)
    return result 
  }

  async insert({titulo, conteudo, lista}) {
    const db = await openDataBase(process.env.DATABASE)
    const result = await query(db, 'INSERT INTO card (titulo, conteudo, lista) VALUES (?,?,?)', [titulo, conteudo, lista])
    return result
  }

  async update(id, {titulo, conteudo, lista}) {
    const db = await openDataBase(process.env.DATABASE)
    const result = await query(db, 'UPDATE card SET titulo = ?, conteudo = ?, lista = ? where id = ?', [titulo, conteudo, lista, id])
    return result
  }

  async delete(id) {
    const db = await openDataBase(process.env.DATABASE)
    const result = await query(db, 'DELETE FROM card where id = ?', id)
    return result
  }
}

module.exports = new CardsRepository()