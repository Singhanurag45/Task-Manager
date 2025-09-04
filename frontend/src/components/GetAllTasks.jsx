import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../styles/GetAllTasks.css";

const GetAllTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("/tasks").then((res) => setTasks(res.data));
  }, []);

  return (
    <div className="get-all-tasks-container">
      <h2>All Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <strong>{task.title}</strong> - {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetAllTasks;
