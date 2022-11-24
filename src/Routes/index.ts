import { Router } from 'express';
import ErrorHandler from '../Midleware/ErrorHandle';
import carRoute from './Car.route';

const router = Router();

router.use('/cars', carRoute);
router.use((err, req, res) => ErrorHandler.handle(err, req, res));

export default router;