// backend/src/controllers/userController.js
const db = require('../config/database');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  // Validação simples
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Por favor, preencha todos os campos.' });
  }

  try {
    // Criptografar a senha
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Inserir usuário no banco de dados
    const newUser = await db.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email, created_at",
      [name, email, hashedPassword]
    );

    res.status(201).json(newUser.rows[0]);

  } catch (err) {
    // Tratamento de erro (ex: email duplicado)
    if (err.code === '23505') { // Código de erro do PostgreSQL para violação de unicidade
      return res.status(400).json({ message: 'Este email já está em uso.' });
    }
    console.error(err);
    res.status(500).json({ message: 'Erro no servidor. Tente novamente mais tarde.' });
  }
};