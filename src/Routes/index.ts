import { Router } from 'express';
// import ErrorHandler from '../Midleware/ErrorHandle';
import carRoute from './Car.route';

const router = Router();

router.use('/cars', carRoute);
// router.use(ErrorHandler.handle);

export default router;