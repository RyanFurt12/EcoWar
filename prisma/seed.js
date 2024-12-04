const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function main() {
  // Gerar usuários
  const users = [];
  for (let i = 0; i < 10; i++) {
    users.push(
      await prisma.user.create({
        data: {
          email: faker.internet.email(),
          name: faker.person.fullName(),
          password: '12345678',
          profilePicture: faker.image.avatar(),
        },
      })
    );
  }
  console.log('User completo!');

  // Gerar desafios
  const challenges = [];
  for (let i = 0; i < 5; i++) {
    const randomCreator = users[Math.floor(Math.random() * users.length)];
    challenges.push(
      await prisma.challenge.create({
        data: {
          name: faker.lorem.words(3),
          description: faker.lorem.paragraph(),
          startDate: faker.date.past(),
          endDate: faker.date.future(),
          coverPhoto: faker.image.urlLoremFlickr(),
          creatorId: randomCreator.id,
          participants: {
            connect: users.map((user) => ({ id: user.id })),
          },
        },
      })
    );
  }
  console.log('Desafio completo!');

  // Gerar posts
  for (let i = 0; i < 20; i++) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];

    await prisma.post.create({
      data: {
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        photo: faker.image.urlLoremFlickr(),
        userId: randomUser.id,
        challengeId: randomChallenge.id,
      },
    });
  }
  console.log('Post completo!');

  // Gerar interações
  const posts = await prisma.post.findMany();
  for (let i = 0; i < 50; i++) {
    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const isReaction = faker.datatype.boolean();
    const content = isReaction? faker.internet.emoji() : faker.lorem.sentence()

    await prisma.interaction.create({
      data: {
        content: content,
        isReaction: isReaction,
        postId: randomPost.id,
        userId: randomUser.id,
      },
    });
  }
  console.log('Interação completo!');

  console.log('Seed completo!');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
