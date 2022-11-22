import { Router } from 'express';
import carRoute from './Car.route';

const router = Router();

router.use('/cars', carRoute);

export default router;