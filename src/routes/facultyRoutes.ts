import { Router } from 'express';
import { createFaculty, getAllFaculties } from '../controllers/facultyController';

const router = Router();

router.post('/', createFaculty);
router.get('/', getAllFaculties);

export default router;
