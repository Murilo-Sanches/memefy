import { UserDAO } from './UserDAO';
import { UserDTO } from './UserDTO';
import { UserModel } from '../../models';
import { MySQL } from '../../data/MySQL';

export class UserRepository implements UserDAO {
  async createUser(user: UserDTO): Promise<UserModel> {
    return await MySQL.instance.user.create({
      data: {
        ...user.user,
        user_contact: { create: user.userContact },
        user_security: { create: user.userSecurity },
      },
    });
  }

  readUser(email: string): Promise<UserDTO | null>;

  readUser(username: string): Promise<UserDTO | null>;

  readUser(username: unknown): Promise<UserDTO | null> {
    throw new Error('Method not implemented.');
  }

  updateUser(user: UserDTO): Promise<UserDTO> {
    throw new Error('Method not implemented.');
  }

  deleteUser(email: string): Promise<null> {
    throw new Error('Method not implemented.');
  }
}
