import Task from '../models/Task.js';

// Get all tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate('eventId', 'title date');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching tasks' });
  }
};

// Create new task
export const createTask = async (req, res) => {
  try {
    const { description, completed, eventId } = req.body;
    const task = new Task({ description, completed, eventId });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
