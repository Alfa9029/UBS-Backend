const express = require('express');
const cors = require('cors');
const { basicAuth } = require("./middlewares/authMiddleware");

const app = express();

// Configurar CORS
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// Middleware de autenticação
app.use('/api/ubs/1/medicos', basicAuth);

// Definição das rotas
app.post('/api/ubs/1/medicos', (req, res) => {
  res.status(201).json({ message: 'Profissional registrado com sucesso!' });
});

app.listen(3001, () => console.log('Servidor rodando na porta 3001'));

