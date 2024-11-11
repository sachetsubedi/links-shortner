import { Router } from 'express';
import { LinksController } from './controller';

const router = Router();

router.post('/', LinksController.create);

export default router;
