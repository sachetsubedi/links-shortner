import { Router } from 'express';
import { LinksController } from './controller';

const router = Router();

router.post('/', LinksController.create);

router.get('/:path', LinksController.get);

export default router;
