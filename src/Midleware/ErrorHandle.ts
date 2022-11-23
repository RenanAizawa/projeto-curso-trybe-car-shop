import { Request, Response } from 'express';

export default class ErrorHandler {
  public static handle(error: any, _req: Request, res: Response) {
    res.status(500).render('error', { error });
  }
}