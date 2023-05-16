import { Router } from 'express';
import { createDegreeBatch, getAllDegreeBatches } from '../controllers/degreeBatchController';

const router = Router();

router.post('/', createDegreeBatch);
router.get('/', getAllDegreeBatches);

export default router;
