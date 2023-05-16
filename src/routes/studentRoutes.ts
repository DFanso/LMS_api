import express from 'express';
import * as studentController from '../controllers/studentController';

const router = express.Router();

router.post('/register', studentController.register);
router.post('/login', studentController.login);

export default router;
