// Exemplo no formsController.js
const Forms = require('../models/forms');

class FormController {
  async create(req, res) {
    const { nome, email, whatsapp } = req.body;
    console.log("Request Body: ", req.body);

    try {
      console.log('Iniciando criação de um novo formulário...');
      const startTime = Date.now();
      
      await Forms.new(nome, email, whatsapp);
      
      console.log('Formulário criado com sucesso!');
      console.log(`Tempo de execução: ${Date.now() - startTime} ms`);
      
      res.status(200).json({ success: true, message: 'Dados obtidos com sucesso!' });
    } catch (error) {
      console.error("Erro ao criar formulário: ", error);
      res.status(500).json({ success: false, message: 'Erro ao inserir dados' });
    }
  }
}

module.exports = new FormController();
