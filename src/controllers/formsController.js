const Forms = require('../models/forms'); // Certifique-se de que o caminho está correto

class FormController {
  async create(req, res) {
    const { nome, email, whatsapp } = req.body;
    console.log("Request Body: ", req.body);

    try {
      console.time('Processo de criação do formulário');
      const result = await Forms.new(nome, email, whatsapp); // Chama o método new corretamente
      console.timeEnd('Processo de criação do formulário');

      res.status(200).json({ success: true, message: 'Dados obtidos com sucesso!', data: result });
    } catch (error) {
      console.error("Erro ao criar formulário: ", error);
      res.status(500).json({ success: false, message: 'Erro ao inserir dados', error: error.message });
    }
  }
}

module.exports = new FormController();
