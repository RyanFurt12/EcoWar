const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function clearUsers() {
  try {
    await prisma.interaction.deleteMany(); // Limpa interações primeiro
    await prisma.post.deleteMany();       // Limpa postagens
    await prisma.challenge.deleteMany();  // Limpa desafios
    await prisma.user.deleteMany();       // Finalmente limpa os usuários

    console.log('Usuários e dados relacionados removidos com sucesso!');
  } catch (error) {
    console.error('Erro ao limpar usuários:', error);
  } finally {
    await prisma.$disconnect();
  }
}

clearUsers();
