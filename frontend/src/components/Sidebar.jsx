import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css"; // Ensure this is imported
import {
  FaHome,
  FaPlusCircle,
  FaChartLine,
  FaTrash,
  FaEdit,
  FaSearch,
  FaTasks,
} from "react-icons/fa";

const navItems = [
  { name: "Dashboard", path: "/", icon: <FaHome /> },
  { name: "Add New Tasks", path: "/add", icon: <FaPlusCircle /> },
  { name: "Update Task", path: "/update", icon: <FaEdit /> },
  { name: "Get Task By ID", path: "/get-task", icon: <FaSearch /> },
  { name: "Get All Tasks", path: "/get-all", icon: <FaTasks /> },
  { name: "Delete Task", path: "/delete", icon: <FaTrash /> },
  { name: "Task Stats", path: "/stats", icon: <FaChartLine /> },
];

const Sidebar = () => (
  <aside className="sidebar">
    <h2>Task Manager</h2>
    <nav>
      <ul className="nav-list">
        {navItems.map(({ name, path, icon }) => (
          <li key={name} className="nav-item">
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <span style={{ marginRight: "10px" }}>{icon}</span>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
