import express from 'express';
import { StatusController } from './controller';

const router = express.Router();

router.get('/', StatusController.status);

export const statusRoutes = router;
