import express from 'express';
import {getScores} from '../controllers/studentController';
import {UpdateScore} from "../controllers/teachercontrolller"
import { authMiddleware } from '../middleware/authMiddleware';;
import { errorHandler } from '../utils/errorHandler';

const router = express.Router();

router.get("/student/:id", authMiddleware, errorHandler(getScores));
router.put("/teacher/:id", authMiddleware, errorHandler(UpdateScore));

export default router;