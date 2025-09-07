// backend/src/routes/userRoutes.js
const express = require('express');
const router = express.Router('../src/routes/userRoutes');
const userController = require('../controllers/userControloller');

// Rota para registrar um novo usuário
// POST /api/users/register
router.post('/register', userController.register);

// (Aqui adicionaremos as rotas de login, etc., no futuro)

module.exports = router;