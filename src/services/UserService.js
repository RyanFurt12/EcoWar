import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import BaseService from './BaseService';

class UserService extends BaseService {
  async createUser(data) {
    const { email, password, name } = data;
    const hashedPassword = await bcrypt.hash(password, 10);

    return await this.prisma.user.create({
      data: { email, name, password: hashedPassword, profilePicture: 'https://avatar.iran.liara.run/public/' },
    });
  }

  async findUser(data){
    return await this.prisma.user.findUnique({ where: data });
  }

  async loginUser(email, password) {
    const user = await this.findUser({ email });
    if (!user) throw new Error('User not found');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error('Invalid password');

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });
    return { token, user };
  }

  async updateUser(data){
    const { id, name, profilePicture } = data;

    const user = await this.findUser({ id: parseInt(id) });

    if (!user) throw("usuario não encontrado");

    const updatedData = { name, profilePicture };
    const updatedUser = await this.prisma.user.update({
      where: { id: parseInt(id) },
      data: updatedData,
    });

    return updatedUser;
  }

  async deleteUser(id) {
    return await this.prisma.user.delete({ where: { id } });
  }

  async getChallenges(id){
    return await this.prisma.user.findUnique({ 
      where: { id },
      include: { challenges: true }
    });
  }
}

export default new UserService();
