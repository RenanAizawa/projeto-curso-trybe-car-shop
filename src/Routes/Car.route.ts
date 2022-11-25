import { Router } from 'express';
import CarController from '../Controllers/Car.controller';

const carRoute = Router();
// const controller = (
//   req: Request,
//   res: Response, 
//   next: NextFunction,
// ) => new CarController(req, res, next);

carRoute.post('/', (req, res, next) => new CarController(req, res, next).newCar());
carRoute.get('/', (req, res, next) => new CarController(req, res, next).allCar());
carRoute.get('/:id', (req, res, next) => new CarController(req, res, next).findOne());
carRoute.put('/:id', (req, res, next) => new CarController(req, res, next).findAndUpdateById());

export default carRoute;