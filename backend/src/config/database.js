// backend/src/config/database.js

const {Pool} = require('pg');

// O POOL gerencia mútiplos conexões com o banco de dados, 
// o que é mais eficiente do que criar uma noava conexão para cada consulta.
const pool = new Pool({
    user: 'postgres', // O usuário padrão do Postgres
    host: 'localhost', 
    database: 'postgres', // O banco de dados padrão do Postgres
    password: 'mysecretpassword', // A senha que definimos no comando Docker 
    port: 5432, 
});

// Exportamos um objeto com um método 'query' que usa o pool. 
// Isso nos permite usar 'db.query' em outras partes do nosso código.
module.exports = {
    query: (text, params) => pool.query(text, params),
};