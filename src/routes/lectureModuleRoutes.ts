import express from 'express';
import { createLectureModule,getAllLectureModules } from '../controllers/lectureModuleController';

const router = express.Router();

// Create Lecture Module
router.post('/', createLectureModule);
router.get('/', getAllLectureModules);

export default router;
