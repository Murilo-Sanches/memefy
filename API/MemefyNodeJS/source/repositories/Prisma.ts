import { PrismaClient } from '@prisma/client';

export class Prisma {
  private static readonly prismaConn = new PrismaClient({
    log: ['query', 'info'],
  });

  public static get instance(): PrismaClient {
    return Prisma.prismaConn;
  }
}
