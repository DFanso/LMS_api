import express from "express";
import * as studentController from "../controllers/studentController";
import { fetchResult } from "../controllers/ResultController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register", studentController.register);
router.post("/login", studentController.login);
router.get("/fetchResult", authMiddleware, fetchResult);
router.get(
  "/getStudentDetailsById",
  authMiddleware,
  studentController.getStudentDetailsById
);
export default router;
