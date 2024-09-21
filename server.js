
require('dotenv').config();
const app = require('./src/app');
console.log('Variáveis de ambiente carregadas.');
console.log('Aplicação Express carregada.');


const PORT = process.env.PORT || 4040;

app.listen(PORT, () => {
    console.log(`API RODANDO na porta ${PORT}!`);
});
