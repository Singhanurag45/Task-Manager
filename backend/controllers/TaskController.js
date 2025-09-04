import Task from "../models/TaskModel.js";
import mongoose from "mongoose";
// Get all tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch tasks", error: err.message });
  }
};

// Get one task by ID
export const getTaskById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid Task ID" });
  }

  try {
    const task = await Task.findById(id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving task", error: err.message });
  }
};

// Create new task
export const createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const saved = await newTask.save();
    res.status(201).json(saved);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Failed to create task", error: err.message });
  }
};

// Update task by ID
export const updateTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid Task ID" });
  }

  try {
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ message: "Task not found for update" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating task", error: err.message });
  }
};

// Delete task by ID
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid Task ID" });
  }

  try {
    const task = await Task.findByIdAndDelete(id);
    if (task) {
      res.json({ message: "Task deleted successfully" });
    } else {
      res.status(404).json({ message: "Task not found for deletion" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting task", error: err.message });
  }
};


// Middleware to get task stats
export const getTaskStats = async (req, res) => {
  try {
    const totalTasks = await Task.countDocuments({});
    const completedTasks = await Task.countDocuments({ status: /Completed/i });
    const inProgressTasks = await Task.countDocuments({
      status: /In Progress/i,
    });
    const pendingTasks = await Task.countDocuments({ status: /Pending/i });

    console.log({ totalTasks, completedTasks, inProgressTasks, pendingTasks });

    res.json({ totalTasks, completedTasks, inProgressTasks, pendingTasks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
