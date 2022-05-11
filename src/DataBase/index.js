const sqlite = require('sqlite3').verbose()

function openDataBase(databaseFile) {
   return new Promise((resolve, reject) => {
    const db = new sqlite.Database(databaseFile, (err) => {
    if(err) {
      reject(err)
    } else {
      resolve(db)
    }
    })
  })
} 

async function initDataBase() {
  const db = await openDataBase(process.env.DATABASE)
  const cardsExists = await query(db, `SELECT name from sqlite_master where type = 'table' and name='card'`)
  if(cardsExists.length === 0) {
    await query(db, `
      CREATE TABLE IF NOT EXISTS card ( 
        id INTEGER PRIMARY KEY NOT NULL,
        titulo VARCHAR(250),
        conteudo TEXT,
        lista VARCHAR(30)
      );
    `)
  }
  return db
}

function query(db, query, values) {
  return new Promise((resolve, reject) => {
   db.all(query, values, (err, rows) => {
    if(err) {
      reject(err)
    } else {
      resolve(rows)
    }
   })
  })
}

module.exports = {
  openDataBase,
  initDataBase,
  query
  }