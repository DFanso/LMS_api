import { Router } from "express";
import { register, login } from "../controllers/lecturerController";
import { addResult, fetchResult } from "../controllers/lectureResultController";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/AddResult", addResult);
router.get("/fetchResult", fetchResult);

export default router;
