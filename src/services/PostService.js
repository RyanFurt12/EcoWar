import BaseService from "./BaseService";

class PostService extends BaseService {
  async createPost(data) {
    const { userId, challengeId, title, description, photo } = data;
    return await this.prisma.post.create({
      data: { userId, challengeId, title, description, photo },
    });
  }
}

export default new PostService();
