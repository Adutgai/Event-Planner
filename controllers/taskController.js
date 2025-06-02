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

// Update a task by ID (PUT)
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, completed, eventId } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { description, completed, eventId },
      { new: true, runValidators: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a task by ID (DELETE)
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
