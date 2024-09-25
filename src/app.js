const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'https://starshape-lancamentos.com.br/', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', require('./routers/routers'));

module.exports = app;
