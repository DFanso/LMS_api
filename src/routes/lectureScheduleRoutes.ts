import { Router } from 'express';
import { createLectureSchedule, getAllLectureSchedules,getFilteredLectureSchedules } from '../controllers/lectureScheduleController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.post('/', createLectureSchedule);
router.get('/', getAllLectureSchedules);
router.get('/filter',authMiddleware,getFilteredLectureSchedules)

export default router;
