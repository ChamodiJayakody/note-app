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

export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.taskId, user: req.user.id });
    if (!task) {
      return next(errorHandler(404, 'Task not found'));
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  const { text, dueDate, completed, priority } = req.body;

  try {
    const updatedTask = await Task.findOneAndUpdate(
      { _id: req.params.taskId, user: req.user.id },
      { text, dueDate, completed, priority },
      { new: true }
    );

    if (!updatedTask) {
      return next(errorHandler(404, 'Task not found'));
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    next(error);
  }
};