require('dotenv').config();
const formRouter = require('./routers/routers'); 
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors({
  origin: 'https://frontend-suplementos.vercel.app/', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', formRouter);

module.exports = app;
