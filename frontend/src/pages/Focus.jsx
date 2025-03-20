import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const localizer = momentLocalizer(moment);

const Focus = () => {
  const [events, setEvents] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/task/get', {
        credentials: 'include',
      });
      if (response.ok) {
        const tasks = await response.json();

        // Filter out completed tasks
        const incompleteTasks = tasks.filter((task) => !task.completed);

        // Map incomplete tasks to calendar events
        const calendarEvents = incompleteTasks
          .filter((task) => task.text && task.dueDate) // Ensure tasks have text and dueDate
          .map((task) => ({
            title: task.text,
            start: new Date(task.dueDate),
            end: new Date(task.dueDate),
            priority: task.priority, // Include priority for styling
          }));

        setEvents(calendarEvents);
        setTasks(incompleteTasks); // Store incomplete tasks for the Eisenhower matrix
      } else {
        console.error('Failed to fetch tasks');
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const updateTaskPriority = async (taskId, newPriority) => {
    try {
      const response = await fetch(`/api/task/update/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ priority: newPriority }),
      });

      if (response.ok) {
        const updatedTask = await response.json();
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task._id === updatedTask._id ? updatedTask : task
          )
        );
      } else {
        console.error('Failed to update task priority');
      }
    } catch (error) {
      console.error('Error updating task priority:', error);
    }
  };

  const getMatrixTasks = (priority) => {
    return tasks.filter((task) => task.priority === priority);
  };

  const TaskCard = ({ task }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: 'TASK',
      item: { id: task._id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));

    const backgroundColor = getEventStyle(task).style.backgroundColor;

    return (
      <div
        ref={drag}
        className={`p-2 rounded-lg shadow-md text-white`}
        style={{
          backgroundColor,
          opacity: isDragging ? 0.5 : 1,
          cursor: 'move',
        }}
      >
        {task.text}
      </div>
    );
  };

  const DropZone = ({ priority, children }) => {
    const [, drop] = useDrop(() => ({
      accept: 'TASK',
      drop: (item) => {
        const task = tasks.find((t) => t._id === item.id);
        if (task.priority !== priority) {
          updateTaskPriority(item.id, priority);
        }
      },
    }));

    return (
      <div
        ref={drop}
        className="border p-4 rounded-lg bg-gray-100 min-h-[150px]"
      >
        <h3 className="text-lg font-semibold text-center mb-2">
          {priority}
        </h3>
        {children}
      </div>
    );
  };

  const getEventStyle = (task) => {
    let backgroundColor = '';
    switch (task.priority) {
      case 'Urgent & Important':
        backgroundColor = '#F87171'; // Red
        break;
      case 'Urgent but Not Important':
        backgroundColor = '#FBBF24'; // Yellow
        break;
      case 'Not Urgent but Important':
        backgroundColor = '#60A5FA'; // Blue
        break;
      case 'Not Urgent & Not Important':
        backgroundColor = '#A78BFA'; // Purple
        break;
      default:
        backgroundColor = '#D1D5DB'; // Gray (fallback)
    }
    return { style: { backgroundColor } };
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Calendar Section */}
        <div className="bg-teal-100 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Task Calendar
          </h2>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            eventPropGetter={(event) => getEventStyle(event)} // Apply custom styles
            showMultiDayTimes={false} // Disable time display
            views={['month']} // Use only the month view
            defaultView="month" // Set the default view to month
          />
        </div>

        {/* Eisenhower Matrix Section */}
        <div className="bg-transparent p-4 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Eisenhower Matrix
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <DropZone priority="Urgent & Important">
              {getMatrixTasks('Urgent & Important').map((task) => (
                <TaskCard key={task._id} task={task} />
              ))}
            </DropZone>
            <DropZone priority="Urgent but Not Important">
              {getMatrixTasks('Urgent but Not Important').map((task) => (
                <TaskCard key={task._id} task={task} />
              ))}
            </DropZone>
            <DropZone priority="Not Urgent but Important">
              {getMatrixTasks('Not Urgent but Important').map((task) => (
                <TaskCard key={task._id} task={task} />
              ))}
            </DropZone>
            <DropZone priority="Not Urgent & Not Important">
              {getMatrixTasks('Not Urgent & Not Important').map((task) => (
                <TaskCard key={task._id} task={task} />
              ))}
            </DropZone>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Focus;