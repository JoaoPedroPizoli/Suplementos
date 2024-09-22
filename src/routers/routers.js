const express = require('express');
const router = express.Router();
const formController = require('./formsController');

router.post('/', formController.create);

module.exports = router;