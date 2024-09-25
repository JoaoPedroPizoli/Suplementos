// src/app.js

const express = require('express');
const cors = require('cors');
const formRouter = require('./routers/routers');

const app = express();


app.use(cors({
  origin: 'https://starshape-lancamentos.com.br', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


console.log('formRouter:', formRouter);

app.use('/', formRouter);

module.exports = app;
