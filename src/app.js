const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors({
  origin: 'https://frontend-suplementos.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true 
}));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', require('./routers/routers'));

module.exports = app;
