import { NextFunction, Request, Response, Router } from 'express';
import CarController from '../Controllers/Car.controller';

const carRoute = Router();
const controller = (
  req: Request,
  res: Response, 
  next: NextFunction,
) => new CarController(req, res, next);

carRoute.post('/', (req, res, next) => controller(req, res, next).newCar);

export default carRoute;