import { PrismaClient } from '@prisma/client';
import { PrismaClientOptions } from '@prisma/client/runtime';

const prisma = new PrismaClient();

export default prisma;

class PrismaFactory {
  private static readonly options: PrismaClientOptions = {
    // Aqui você pode configurar o Prisma Client, como o URL do banco de dados
  };
  private static readonly prisma = new PrismaClient();

  public static get instance(): PrismaClient {
    return PrismaFactory.prisma;
  }
}
