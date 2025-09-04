import React from "react";
import "../styles/TaskCard.css";

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <div
        className="task-header"
        style={{ backgroundColor: task.color || "#333" }}
      >
        <div className="task-title-container">
          <span className="task-title">{task.title}</span>
          {/* ✅ Added Task ID below title */}
          <small className="task-id">ID: {task._id}</small>
        </div>
        <span className="priority-badge">{task.priority || "P0"}</span>
      </div>

      <div className="task-body">
        <p className="task-desc">{task.description}</p>

        <div className="task-info">
          <p className="task-date">
            <strong>Start Date:</strong> {task.startDate || "-"}
          </p>
          <p className="task-date">
            <strong>End Date:</strong> {task.endDate || "-"}
          </p>
          <p className="task-author">
            <strong>Author:</strong> {task.author || "Unknown"}
          </p>
        </div>
      </div>

      <div className="task-footer">
        <span className={`status-badge ${task.status.toLowerCase()}`}>
          {task.status}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
