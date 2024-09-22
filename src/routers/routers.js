const express = require('express');
const router = express.Router();
const formController = require('../controllers/formsController'); 


router.post('/', formController.create);
app.get('/', (req, res) => {
    res.send('Bem-vindo à API!');
  });
  

module.exports = router;
