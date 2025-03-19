import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createTask, getTasks, deleteTask, updateTask } from '../controllers/task.controller.js';

const router = express.Router();

router.post('/create', verifyToken, createTask);
router.get('/get', verifyToken, getTasks);
router.delete('/delete/:taskId', verifyToken, deleteTask); 
router.put('/update/:taskId', verifyToken, updateTask);

export default router;