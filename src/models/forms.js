const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Forms {
  async new(nome, email, whatsapp) {
    try {
      const result = await prisma.form.create({
        data: {
          nome,
          email,
          whatsapp,
        },
      });
      return result;
    } catch (error) {
      console.error('Erro ao inserir dados no banco:', error);
      throw error;
    }
  }
}

module.exports = new Forms();
