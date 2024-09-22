const express = require('express');
const cors = require('cors');
const app = express();

// Configuração correta do CORS
app.use(cors({
  origin: 'https://frontend-suplementos.vercel.app', // Corrija para garantir que o URL está correto
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permitir os métodos necessários
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos que podem ser enviados
  credentials: true // Se necessário para cookies ou autenticação
}));

// Middlewares da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rotas
app.use('/', require('./routers/routers'));

module.exports = app;
