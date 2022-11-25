import { Router } from 'express';
import MotorcycleController from '../Controllers/Motorcycle.controller';

const motorcycleRouter = Router();

motorcycleRouter.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).newMotorcycle(),
);

motorcycleRouter.get(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).allMotor(),
);

motorcycleRouter.get(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).findOne(),
);

motorcycleRouter.put(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).findAndUpdateById(),
);

export default motorcycleRouter;