''
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Forms {
  async new(nome, email, whatsapp) {
    try {
      await prisma.forms.create({
        data: {
          nome,
          email,
          whatsapp,
        },
      });
      return { status: 200 };
    } catch (error) {
      console.error('Erro ao inserir dados no banco:', error);
      throw error;
    }
  }
}

module.exports = new Forms();
