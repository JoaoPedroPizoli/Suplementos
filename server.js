process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', reason);
});

require('dotenv').config();
const app = require('./src/app');
console.log('Variáveis de ambiente carregadas.');

console.log('Aplicação Express carregada.');

app.listen(3030, () => {
    console.log(`API RODANDO na porta ${3030}!`);
});
