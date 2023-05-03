import { UserContactModel, UserModel, UserSecurityModel } from '../../models';

export type UserDTO = { user: UserModel } & {
  userContact: UserContactModel;
} & { userSecurity: UserSecurityModel };
