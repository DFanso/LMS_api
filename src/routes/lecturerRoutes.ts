import { Router } from "express";
import {
  register,
  login,
  getLecturerDetailsById,
} from "../controllers/lecturerController";
import { addResult } from "../controllers/ResultController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/AddResult", authMiddleware, addResult);
router.post("/getLecturerDetailsById", authMiddleware, getLecturerDetailsById);

export default router;
