import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import { UserRouter } from './routes/UserRouter';
import { UserController, UserService, UserRepository } from './entities/user';
import { AppError } from './utilities/AppError';

/**
 * Entry point to application
 */
export class App {
  private app: express.Application;
  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;

    this.setupMiddleware();
    this.setupControllers();
    this.errorHandler();
  }

  private setupMiddleware(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private setupControllers(): void {
    const userRepository = new UserRepository();
    const userService = new UserService(userRepository);
    const userController = new UserController(userService);
    const userRouter = new UserRouter(userController);

    this.app.use('/api/v1/users', userRouter.getRouter);
  }

  private errorHandler(): void {
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) =>
        AppError.void(err, req, res, next)
    );
  }

  public listen(): void {
    // + ANSI
    this.app.listen(this.port, () => {
      console.log('\x1b[32;1m%s\x1b[0m', `App listening on port ${this.port}`);
    });
  }
}
