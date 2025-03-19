import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createTask, getTasks } from '../controllers/task.controller.js';

const router = express.Router();

router.post('/create', verifyToken, createTask);
router.get('/get', verifyToken, getTasks);

export default router;