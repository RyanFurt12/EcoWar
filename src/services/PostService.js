import BaseService from "./BaseService";

class PostService extends BaseService {
  async getPost(id){
    return this.prisma.post.findUnique({where:{ id }, include:{ user:true, challenge:true }});
  }

  async createPost(data) {
    const { userId, challengeId, title, description, photo } = data;
    return await this.prisma.post.create({
      data: { userId, challengeId, title, description, photo },
    });
  }

  async deletePost(id){
    return this.prisma.post.delete({ where: { id } })
  }
}

export default new PostService();
