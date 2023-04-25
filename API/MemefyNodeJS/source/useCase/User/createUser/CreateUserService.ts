import { user as User } from '@prisma/client';

import { UserDTO } from './CreateUserDTO';
import { ICreateUserDAO } from './ICreateUserDAO';
import { Prisma } from '../../../repositories/Prisma';

export class CreateUserService implements ICreateUserDAO {
  async create(user: UserDTO): Promise<User> {
    return await Prisma.instance.user.create({ data: user });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await Prisma.instance.user.findFirst({
      where: { user_contact: { email } },
      include: { user_contact: true },
    });
  }
}
