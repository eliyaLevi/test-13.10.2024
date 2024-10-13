import express from 'express';
import {getScores,UpdateStudent} from '../controllers/studentController';
import { authMiddleware } from '../middleware/authMiddleware';;
import { errorHandler } from '../utils/errorHandler';
import {teacherAuthMiddleware} from "../middleware/authMiddleware"

const router = express.Router();

router.get("/:id", authMiddleware, errorHandler(getScores));
router.put("/:id", authMiddleware,teacherAuthMiddleware, errorHandler(UpdateStudent));

export default router;