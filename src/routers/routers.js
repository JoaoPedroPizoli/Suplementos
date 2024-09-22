const express = require('express');
const router = express.Router();
const formController = require('../controllers/formsController'); // Certifique-se de que o caminho está correto

router.post('/', formController.create);

module.exports = router;
