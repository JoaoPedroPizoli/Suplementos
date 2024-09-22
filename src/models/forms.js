const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Forms {
  // Método para criar um novo registro no banco de dados
  async new(nome, email, whatsapp) {
    try {
      // Inserção no banco de dados usando Prisma
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

// Exporta uma nova instância da classe Forms
module.exports = new Forms();
