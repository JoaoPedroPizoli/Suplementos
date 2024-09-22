const { PrismaClient } = require('@prisma/client'); // Importando diretamente do Prisma Client
const prisma = new PrismaClient(); // Inicializando o Prisma Client

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
        return { status: 200, result };
      } catch (error) {
        console.error('Erro ao inserir dados no banco:', error);
        throw error;
      }
    }
  }
  

module.exports = new Forms();
