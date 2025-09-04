import React, { useEffect, useState } from "react";
import axios from "../axios";
import TaskCard from "../components/TaskCard";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("/tasks");
        setTasks(res.data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-title-bar">
        <h2 className="dashboard-title">
          Dashboard ( Total Tasks-{tasks.length} )
        </h2>
        {/* <span className="task-count">All Task ({tasks.length})</span> */}
      </div>

      {tasks.length === 0 ? (
        <p className="dashboard-empty">No tasks available.</p>
      ) : (
        <div className="task-board-grid">
          {tasks.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}
