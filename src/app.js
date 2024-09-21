require('dotenv').config();
console.log('Inicializando app.js');

const express = require('express');
const app = express();
const cors = require('cors');
const routers = require('./routers/routers');

app.use(cors({
    origin: 'https://frontend-suplementos.vercel.app/',
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/', routers);

module.exports = app;
