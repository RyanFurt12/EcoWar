import BaseService from './BaseService';

class ChallengeService extends BaseService {
  async createChallenge(data) {
    const { name, description, endDate, userId } = data;

    return await this.prisma.challenge.create({
      data: {
        name,
        description,
        startDate: new Date(),
        endDate: new Date(endDate),
        participants: { connect: { id: userId*1 } },
        creator: { connect: { id: userId*1 } },
      },
    });
  }

  async joinChallenge(challengeId, userId) {
    const challenge = await this.prisma.challenge.findUnique({
      where: { id:challengeId*1 },
    });
    if (!challenge) throw new Error('Invalid invite code');

    return await this.prisma.challenge.update({
      where: { id: challenge.id*1 },
      data: {
        participants: { connect: { id: userId*1 } },
      },
    });
  }

  async getChallenge(id) {
    return await this.prisma.challenge.findUnique({
      where: { id },
      include:{ participants: true }
    });
  }
  
  async getChallengePosts(challengeId) {
    return await this.prisma.post.findMany({
      where: { challengeId },
      orderBy: { id: 'desc' },
      include: { user: true, interactions: true },
    });
  }

  async getRanking(challengeId) {
    const posts = await this.prisma.post.groupBy({
      by: ['userId'],
      where: { challengeId },
      _count: { userId: true },
      orderBy: { _count: { userId: 'desc' } },
    });

    const ranking = await Promise.all(
      posts.map(async (entry) => ({
        user: await this.prisma.user.findUnique({ where: { id: entry.userId } }),
        postCount: entry._count.userId,
      }))
    );
  
    return ranking;
  }
}

export default new ChallengeService();
