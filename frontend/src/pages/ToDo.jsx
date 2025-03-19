import React, { useState, useEffect } from 'react';
import TaskModal from '../components/TaskModal';
import TaskCard from '../components/TaskCard';

export default function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Not Urgent & Not Important'); // Initialize priority state
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/task/get', {
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();

        // Sort tasks: Incomplete tasks first, then by due date
        const sortedTasks = data.sort((a, b) => {
          if (a.completed === b.completed) {
            return new Date(a.dueDate) - new Date(b.dueDate); // Sort by due date
          }
          return a.completed - b.completed; // Incomplete tasks first
        });

        setTasks(sortedTasks);
      } else {
        console.error('Failed to fetch tasks');
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async () => {
    if (!newTask.trim() || !dueDate || !priority) return;

    try {
      const response = await fetch('/api/task/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ text: newTask, dueDate, priority }),
      });

      if (response.ok) {
        const task = await response.json();
        setTasks((prevTasks) => {
          const updatedTasks = [...prevTasks, task];
          return updatedTasks.sort((a, b) => {
            if (a.completed === b.completed) {
              return new Date(a.dueDate) - new Date(b.dueDate);
            }
            return a.completed - b.completed;
          });
        });
        setNewTask('');
        setDueDate('');
        setPriority('Not Urgent & Not Important'); // Reset priority
      } else {
        console.error('Failed to add task');
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`/api/task/delete/${taskId}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (response.ok) {
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
      } else {
        console.error('Failed to delete task');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      const response = await fetch(`/api/task/update/${updatedTask._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(updatedTask),
      });

      if (response.ok) {
        const task = await response.json();
        setTasks((prevTasks) => {
          const updatedTasks = prevTasks.map((t) =>
            t._id === task._id ? task : t
          );
          return updatedTasks.sort((a, b) => {
            if (a.completed === b.completed) {
              return new Date(a.dueDate) - new Date(b.dueDate);
            }
            return a.completed - b.completed;
          });
        });
        setEditTask(null); // Close the modal
      } else {
        console.error('Failed to update task');
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const getTaskColor = (task) => {
    const today = new Date();
    const dueDate = new Date(task.dueDate);

    if (task.completed) {
      return 'bg-green-200'; // Completed tasks
    } else if (dueDate - today <= 2 * 24 * 60 * 60 * 1000 && dueDate >= today) {
      // Tasks due within 2 days
      return 'bg-red-200';
    } else {
      // Other tasks
      const colors = ['bg-blue-200', 'bg-yellow-200', 'bg-purple-200'];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">To-Do List</h1>
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
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border p-2 mr-2 rounded"
        >
          <option value="Urgent & Important">Urgent & Important</option>
          <option value="Urgent but Not Important">Urgent but Not Important</option>
          <option value="Not Urgent but Important">Not Urgent but Important</option>
          <option value="Not Urgent & Not Important">Not Urgent & Not Important</option>
        </select>
        <button
          onClick={addTask}
          className="bg-teal-800 hover:bg-teal-600 text-white p-2 rounded"
        >
          Add Task
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            title={task.text}
            date={new Date(task.dueDate).toLocaleDateString()}
            priority={task.priority} // Pass priority to TaskCard
            isCompleted={task.completed}
            onEdit={() => setEditTask(task)}
            onDelete={() => deleteTask(task._id)}
            onToggleComplete={() =>
              updateTask({ ...task, completed: !task.completed })
            }
            color={getTaskColor(task)}
          />
        ))}
      </div>

      {editTask && (
        <TaskModal
          isOpen={!!editTask}
          onClose={() => setEditTask(null)}
          onSubmit={updateTask}
          onDelete={deleteTask}
          task={editTask}
        />
      )}
    </div>
  );
}