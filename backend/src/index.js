//  backend/index.js

const express = require('express');

// Criar uma instância do aplicativo Espress

const app = express();

// Definiir a portar que o servidor irá escutar
// Usamos a variável PORT ou 3001 como padrão
const PORT = process.env.PORT || 3001;

// Rota de teste para verificar se a API está funcionando
app.get('/', (req, res) => {
    res.json({ message: "API do Kanban rodando!"});
})

// Iniciar o sevidor e o faz escutar na porta definida
app.listen(PORT, () => {
    console.log(`Seriddor rodando na porta ${PORT}`);
});