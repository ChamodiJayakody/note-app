import Task from '../models/task.model.js';
import { errorHandler } from '../utils/error.js';

export const createTask = async (req, res, next) => {
  const { text, dueDate } = req.body;

  if (!text || !dueDate) {
    return next(errorHandler(400, 'Text and due date are required'));
  }

  const newTask = new Task({
    text,
    dueDate,
    user: req.user.id,
  });

  try {
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    next(error);
  }
};

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};