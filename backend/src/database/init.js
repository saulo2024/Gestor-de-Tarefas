// backend/src/database/init.js

const db = require('../config/database');

async function createTables() {
  const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );
  `;
  // Adicione aqui outras tabelas (boards, lists, cards) no futuro...

  try {
    await db.query(createTableQuery);
    console.log('Tabela "users" criada com sucesso (ou já existia).');
  } catch (err) {
    console.error('Erro ao criar a tabela "users":', err);
  }
}

createTables();