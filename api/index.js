const serverless = require('serverless-http');
const app = require('../src/app'); // Certifique-se de que o caminho está correto para importar o app

module.exports = serverless(app);
