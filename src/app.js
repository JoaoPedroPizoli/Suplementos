require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const formRouter = require('./routers/routers'); 
app.use(cors({
  origin: 'https://frontend-suplementos.vercel.app',
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', formRouter);

module.exports = app;
