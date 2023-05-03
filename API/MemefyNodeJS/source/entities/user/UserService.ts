import { UserModel } from '../../models';
import { User } from './User';
import { UserDTO } from './UserDTO';
import { UserRepository } from './UserRepository';

export class UserService {
  private userRepository: UserRepository;

  constructor(repository: UserRepository) {
    this.userRepository = repository;
  }

  public async createUser(userDTO: UserDTO): Promise<UserModel> {
    const user = new User(userDTO);

    if (!user.user.profile_name) {
      const firstName = user.userContact.first_name;
      const lastName = user.userContact.last_name;
      user.user.profile_name = `${firstName} ${lastName}`;
    }

    const userRepo = await this.userRepository.createUser(user);

    return userRepo;
  }
}
