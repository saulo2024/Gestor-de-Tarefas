// backend/src/index.js

const express = require('express');
const userRoutes = require('./routes/userRoutes'); // Importamos as rotas de usuário

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para o Express entender JSON
app.use(express.json());

// Rota de teste
app.get('/api', (req, res) => {
  res.json({ message: "API do Kanban rodando!" });
});

// Usar as rotas de usuário com o prefixo '/api/users'
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});