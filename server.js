process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', reason);
});

require('dotenv').config();
const app = require('./src/app');
console.log('Variáveis de ambiente carregadas.');

const PORT = process.env.PORT || 3000;
console.log('Aplicação Express carregada.');

app.listen(PORT, () => {
    console.log(`API RODANDO na porta ${PORT}!`);
});
