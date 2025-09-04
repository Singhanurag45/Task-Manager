import React, { useState } from "react";
import axios from "../axios";
import "../styles/GetTaskById.css";
import TaskCard from "./TaskCard";

const GetTaskById = () => {
  const [taskId, setTaskId] = useState("");
  const [task, setTask] = useState(null);
  const [searched, setSearched] = useState(false); 

  const fetchTask = async () => {
    try {
      const response = await axios.get(`/tasks/${taskId}`);
      setTask(response.data);
    } catch (error) {
      setTask(null);
    } finally {
      setSearched(true); // ✅ mark search as triggered
    }
  };

  return (
    <div className="get-task-by-id-container">
      <h2>Get Task By ID</h2>
      <input
        type="text"
        placeholder="Enter Task ID"
        value={taskId}
        onChange={(e) => setTaskId(e.target.value)}
      />
      <button onClick={fetchTask}>Fetch Task</button>
      {searched && (task ? <TaskCard task={task} /> : <p>No task found</p>)}

    </div>
  );
};

export default GetTaskById;
