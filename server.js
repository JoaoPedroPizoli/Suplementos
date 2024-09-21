
require('dotenv').config();
const app = require('./src/app');
console.log('Variáveis de ambiente carregadas.');
console.log('Aplicação Express carregada.');


const PORT = process.env.PORT || 4040;

process.on('beforeExit', (code) => {
    console.log('Processo prestes a encerrar com código:', code);
  });
  
  process.on('exit', (code) => {
    console.log('Processo encerrado com código:', code);
  });
  
  process.on('uncaughtException', (err) => {
    console.error('Exceção não capturada:', err);
  });
  
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Rejeição não tratada em:', promise, 'Motivo:', reason);
  });
  
  

app.listen(PORT, () => {
    console.log(`API RODANDO na porta ${PORT}!`);
});
