import { Router } from 'express';
import { createLectureSchedule, getAllLectureSchedules,getFilteredLectureSchedules,getFilteredLectureSchedulesByLecturer } from '../controllers/lectureScheduleController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.post('/', createLectureSchedule);
router.get('/', getAllLectureSchedules);
router.get('/filter',authMiddleware,getFilteredLectureSchedules)
router.get('/filterByLecturer',authMiddleware, getFilteredLectureSchedulesByLecturer)

export default router;
