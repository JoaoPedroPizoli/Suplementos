const express = require('express');
const cors = require('cors');
const app = express();

// Configuração do CORS para permitir apenas o seu domínio na Vercel
app.use(cors({
  origin: 'https://https://frontend-suplementos.vercel.app/', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true 
}));

// Outros middlewares e rotas
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Definição das rotas da API
app.use('/', require('./routers/routers'));

module.exports = app;
