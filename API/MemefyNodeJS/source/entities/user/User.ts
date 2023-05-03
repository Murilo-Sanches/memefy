import { UserContactModel, UserModel, UserSecurityModel } from '../../models';
import { UserDTO } from './UserDTO';

export class User {
  public readonly user!: UserModel;
  public readonly userContact!: UserContactModel;
  public readonly userSecurity!: UserSecurityModel;

  constructor(user: UserDTO) {
    Object.assign(this, user);
  }
}
