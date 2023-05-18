import express from "express";
import {
  createLectureModule,
  getAllLectureModules,
  getAllLectureModulesForStudent,
  getAllLectureModulesFromStudentID,
} from "../controllers/lectureModuleController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

// Create Lecture Module
router.post("/", createLectureModule);
router.get("/student", authMiddleware, getAllLectureModulesForStudent);
router.get("/", getAllLectureModules);
router.get(
  "/getAllLectureModulesFromStudentID",
  authMiddleware,
  getAllLectureModulesFromStudentID
);
export default router;
