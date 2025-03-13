import React, { useState } from 'react';

export default function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [dueDate, setDueDate] = useState('');

  const addTask = () => {
    if (newTask.trim() && dueDate) {
      setTasks([...tasks, { text: newTask, dueDate, completed: false }]);
      setNewTask('');
      setDueDate('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="New task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 mr-2 rounded"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border p-2 mr-2 rounded"
        />
        <button onClick={addTask} className="bg-blue-500 text-white p-2 rounded">
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
              className="mr-2"
            />
            <span className={`flex-1 ${task.completed ? 'line-through' : ''}`}>
              {task.text} (Due: {task.dueDate})
            </span>
            <button onClick={() => deleteTask(index)} className="bg-red-500 text-white p-1 rounded">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}