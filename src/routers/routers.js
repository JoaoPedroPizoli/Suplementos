
const express = require('express');
const router = express.Router();
const formController = require('../controllers/formsController');

router.post('/', formController.create);

module.exports = router;
