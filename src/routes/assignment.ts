import express from "express";
import multer from "multer";
import {
  createAssignment,
  getAssignmentsForStudent,
} from "../controllers/assignmentController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();
const upload = multer();

router.post("/", upload.single("file"), createAssignment);
router.post("/student", authMiddleware, getAssignmentsForStudent);
export default router;
