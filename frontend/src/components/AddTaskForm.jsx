import React, { useState } from "react";
import "../styles/TaskForm.css"; // Make sure this is imported

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
      const response = await fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Task added successfully!");
      } else {
        alert("Failed to add task.");
      }
    } catch (error) {
      console.error(error);
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
