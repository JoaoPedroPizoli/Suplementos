// src/controllers/formsController.js
const Forms = require('../models/forms');

class FormController {
  async create(req, res) {
    const { nome, email, whatsapp } = req.body;
    console.log("Iniciando criação de formulário...");
    const startTime = Date.now();

    try {
      console.time('Tempo de execução da inserção no banco de dados');
      const result = await Forms.new(nome, email, whatsapp);
      console.timeEnd('Tempo de execução da inserção no banco de dados');
      
      console.log(`Tempo total de execução: ${Date.now() - startTime} ms`);
      res.status(200).json({ success: true, message: 'Dados obtidos com sucesso!', data: result });
    } catch (error) {
      console.error("Erro ao criar formulário: ", error);
      res.status(500).json({ success: false, message: 'Erro ao inserir dados', error: error.message });
    }
  }
}

module.exports = new FormController();
