import React, { useState } from "react";
import axios from "../axios";
import "../styles/DeleteTask.css";

const DeleteTask = () => {
  const [taskId, setTaskId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    if (!taskId.trim()) {
      setMessage("Please enter a Task ID");
      return;
    }
  
    try {
      // Use .trim() to remove any accidental spaces
      await axios.delete(`/tasks/${taskId.trim()}`);
      setMessage("Task deleted successfully");
      setTaskId("");
    } catch (error) {
      // Use + or template literals to display the error message properly
      const errorMsg = error.response?.data?.message || "Server Error";
      setMessage(`Failed to delete task. Reason: ${errorMsg}`);
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
