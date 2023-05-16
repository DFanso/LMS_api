import express from 'express';
import { createDegree, getAllDegrees } from '../controllers/degreeController';

const router = express.Router();

// Create a new degree
router.post('/', createDegree);

// Get all degrees
router.get('/', getAllDegrees);

export default router;
