import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
  private readonly status: string;
  private readonly statusCode: number;
  private readonly isOperacional: boolean;

  constructor(message: string, statusCode: number) {
    super(message);

    this.status = statusCode.toString().startsWith('4') ? 'fail' : 'error';

    this.statusCode = statusCode;

    this.isOperacional = true;

    Error.captureStackTrace(this, this.constructor);
  }

  public static void(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ): Response {
    console.log('ops');
    return res.status(400).json(err);
  }
}
