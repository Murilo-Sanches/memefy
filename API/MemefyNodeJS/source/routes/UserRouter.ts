import express from 'express';
import { UserController } from '../entities/user/UserController';

export class UserRouter {
  private router: express.Router;
  private userController: UserController;

  constructor(userController: UserController) {
    this.router = express.Router();
    this.userController = userController;

    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router.get('/', this.userController.hello);

    this.router.post(
      '/signup',
      this.userController.signUp.bind(this.userController)
    );
    this.router.post('/login', this.userController.login);
    this.router.patch('/:id', this.userController.hello);
    this.router.delete('/:id', this.userController.hello);
  }

  public get getRouter(): express.Router {
    return this.router;
  }
}
