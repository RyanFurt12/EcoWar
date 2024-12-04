import { PrismaClient } from '@prisma/client';

class BaseService {
  prisma = new PrismaClient();
}

export default BaseService;
