const Forms = require('../models/forms')

class FormController {
    async create(req, res) {
        const { nome, email, whatsapp } = req.body;
        console.log("Request Body: ", req.body);
        
        let result = await Forms.new(nome, email, whatsapp);

        console.log("Result: ", result);  

        result.status === 200
            ? res.status(200).json({ success: true, message: 'Dados Obtidos com Sucesso!' })
            : res.status(404).json({ success: false, message: result.error });
    }
}

module.exports = new FormController();
