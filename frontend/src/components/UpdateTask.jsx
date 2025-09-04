
import React, { useState } from 'react';
import axios from '../axios';
import '../styles/UpdateTask.css';

const UpdateTask = () => {
  const [taskId, setTaskId] = useState('');
  const [taskData, setTaskData] = useState({ title: '', description: '' });
  const [message, setMessage] = useState('');

  const handleUpdate = async () => {
    try {
      await axios.put(`/tasks/${taskId}`, taskData);
      setMessage('Task updated successfully');
    } catch (error) {
      setMessage('Update failed');
    }
  };

  return (
    <div className="update-task-container">
      <h2>Update Task</h2>
      <input
        type="text"
        placeholder="Task ID"
        value={taskId}
        onChange={(e) => setTaskId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        value={taskData.title}
        onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={taskData.description}
        onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
      />
      <button onClick={handleUpdate}>Update Task</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateTask;
