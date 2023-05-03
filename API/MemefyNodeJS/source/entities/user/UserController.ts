import { Request, Response } from 'express';

import { UserService } from './UserService';
import { UserDTO } from './UserDTO';

export class UserController {
  private userService: UserService;

  constructor(service: UserService) {
    this.userService = service;
  }

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
