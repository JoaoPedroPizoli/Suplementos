require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const formRouter = require('./routers/routers'); // Caminho corrigido para o arquivo routers.js

app.use(cors({
  origin: 'https://frontend-suplementos.vercel.app/', // Ajuste conforme o domínio do seu front-end
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', formRouter);

module.exports = app;
