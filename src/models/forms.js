const knex = require('../database/connection');

class Forms {
    async new(nome, email, whatsapp) {
        try {
            await knex('forms').insert({
                nome: nome,
                email: email,
                whatsapp: whatsapp
            });
            return { status: 200 };
        } catch (error) {
            console.log(error);  
            return { status: 404, error: error.message }; 
        }
    }
}

module.exports = new Forms;
