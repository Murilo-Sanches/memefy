import { Request, Response } from 'express';

import { UserService } from './UserService';
import { UserDTO } from './UserDTO';
import { Async } from '../../decorators/Async';

export class UserController {
  private userService: UserService;

  constructor(service: UserService) {
    this.userService = service;
  }

  @Async()
  public async signUp(req: Request, res: Response): Promise<Response> {
    const userDTO: UserDTO = req.body;

    const newUser = await this.userService.createUser(userDTO);

    return res.status(201).json(newUser);
  }

  public login = (req: Request, res: Response): Response => {
    return res.status(200).json();
  };

  public hello(req: Request, res: Response): Response {
    return res.status(200).json({ status: 'success', message: 'hello' });
  }
}
