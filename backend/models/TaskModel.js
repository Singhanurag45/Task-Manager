import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  status: String,
  color: String,
  startDate: String,
  endDate: String,
});

const Task = mongoose.model("Task", TaskSchema);

export default Task;
