import React, { useState } from "react";
import "../styles/TaskForm.css"; 
import axios from "../axios"; // This is your custom instance

const AddTaskForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    status: "",
    color: "#000000",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ FIX: Use axios directly. Do NOT use fetch().
      // Your "../axios" file already handles the base URL (localhost vs render).
      await axios.post("/tasks", formData);

      // If code reaches here, it meant success (Axios throws error otherwise)
      alert("Task added successfully!");
      
      // Optional: Clear the form after success
      setFormData({
        title: "",
        description: "",
        author: "",
        status: "",
        color: "#000000",
        startDate: "",
        endDate: "",
      });

    } catch (error) {
      console.error("Error adding task:", error);
      alert("Error occurred while adding task.");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Add New Task</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Task Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <label className="color-label">
          Color:
          <input
            type="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
        </label>

        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskForm;