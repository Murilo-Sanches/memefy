import { UserModel } from '../../models';
import { UserDTO } from './UserDTO';

export interface UserDAO {
  createUser(user: UserDTO): Promise<UserModel>;
  readUser(email: string): Promise<UserDTO | null>;
  readUser(username: string): Promise<UserDTO | null>;
  updateUser(user: UserDTO): Promise<UserDTO>;
  deleteUser(email: string): Promise<null>;
}
