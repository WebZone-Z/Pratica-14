// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public')); // Para servir arquivos estáticos

// Rota para o formulário de contato
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // Aqui você poderia fazer o processamento, como salvar no banco de dados
    console.log(`Contato recebido de: ${name} (${email}) - Mensagem: ${message}`);
    
    // Resposta para o frontend
    res.json({ success: true, message: 'Mensagem enviada com sucesso!' });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
