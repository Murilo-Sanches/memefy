import { PrismaClient } from '@prisma/client';

import { Connection } from './Connection';

export class MySQL implements Connection {
  private static readonly prisma = new PrismaClient({
    log: ['query', 'info'],
  });

  public static get instance(): PrismaClient {
    return MySQL.prisma;
  }
}
