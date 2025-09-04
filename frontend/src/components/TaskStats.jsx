import React, { useEffect, useState } from "react";
import "../styles/TaskStats.css";
import axios from "../axios";

const TaskStats = () => {
  const [stats, setStats] = useState({
    totalTasks: 0,
    completedTasks: 0,
    inProgressTasks: 0,
    pendingTasks: 0,
  });

    useEffect(() => {
      const fetchStats = () => {
        axios
          .get("/tasks/stats")
          .then((res) => {
            console.log("📊 Stats from backend:", res.data);
            setStats(res.data);
          })
          .catch((err) => console.error("Error fetching task stats:", err));
      };

      fetchStats(); // initial fetch
      const interval = setInterval(fetchStats, 3000); // every 3 sec

      return () => clearInterval(interval); // cleanup on unmount
    }, []);



  const statCards = [
    {
      title: "TOTAL TASK",
      count: stats.totalTasks,
      color: "#2C3EFA",
      letter: "T",
    },
    {
      title: "COMPLETED",
      count: stats.completedTasks,
      color: "#27AE60",
      letter: "C",
    },
    {
      title: "IN PROGRESS",
      count: stats.inProgressTasks,
      color: "#F39C12",
      letter: "I",
    },
    {
      title: "PENDING",
      count: stats.pendingTasks,
      color: "#E74C3C",
      letter: "P",
    },
  ];

  return (
    <div className="stats-page">
      <h2 className="stats-title">Tasks</h2>
      <div className="stats-grid">
        {statCards.map((item) => (
          <div key={item.title} className="stat-card">
            <div className="stat-top">
              <div className="circle" style={{ backgroundColor: item.color }}>
                {item.letter}
              </div>
              <div className="stat-text">
                <h3>{item.title}</h3>
                <p className="count">{item.count}</p>
                <p className="subtitle">Updated in real-time</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskStats;
