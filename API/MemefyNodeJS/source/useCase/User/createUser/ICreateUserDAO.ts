import { user as User } from '@prisma/client';

import { UserDTO } from './CreateUserDTO';

export interface ICreateUserDAO {
  create(user: UserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
