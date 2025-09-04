import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import TaskCard from "./components/TaskCard.jsx";
import AddTaskForm from "./components/AddTaskForm.jsx";
import TaskStats from "./components/TaskStats.jsx";
import GetTaskById from "./components/GetTaskById.jsx";
import Dashboard from "./components/Dashboard.jsx";
import UpdateTask from "./components/UpdateTask.jsx";
import GetAllTasks from "./components/GetAllTasks.jsx";
import DeleteTask from "./components/DeleteTask.jsx";

const DummyPage = ({ title }) => (
  <div className="content">
    <div className="header">
      <h1>{title}</h1>
      <span>All Task ({tasks.length})</span>
    </div>
    <div className="task-grid">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  </div>
);

const App = () => (
  <div className="container">
    <Sidebar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddTaskForm />} />
        <Route path="/update" element={<UpdateTask />} />
        <Route path="/get-task" element={<GetTaskById />} />
        <Route path="/get-all" element={<GetAllTasks />} />
        <Route path="/delete" element={<DeleteTask />} />
        <Route path="/stats" element={<TaskStats />} />
      </Routes>
    </main>
  </div>
);

export default App;
