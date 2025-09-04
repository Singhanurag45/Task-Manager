import React, { useState } from "react";
import axios from "../axios";
import "../styles/DeleteTask.css";

const DeleteTask = () => {
  const [taskId, setTaskId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    try {
      await axios.delete(`/tasks/${taskId}`);
      setMessage("Task deleted successfully");
      setTaskId("");
    } catch (error) {
      setMessage("Failed to delete task");
    }
  };

  return (
    <div className="delete-task-container">
      <h2>Delete Task</h2>
      <input
        type="text"
        value={taskId}
        onChange={(e) => setTaskId(e.target.value)}
        placeholder="Enter Task ID"
      />
      <button onClick={handleDelete}>Delete Task</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteTask;
