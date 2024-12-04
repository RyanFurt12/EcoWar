import BaseService from "./BaseService";

class InteractionService extends BaseService {
  async createInteraction(postId, userId, content, isReaction) {
    if (!content) throw new Error('Content is required for comments');

    return await this.prisma.interaction.create({
      data: {
        postId,
        userId,
        content,
        isReaction
      },
    });
  }

  async deleteInteraction(id){
    return await this.prisma.interaction.delete({ where: { id } });
  }
}

export default new InteractionService();