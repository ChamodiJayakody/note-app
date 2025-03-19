import React from 'react';
import { MdEdit, MdDelete, MdCheckCircle, MdRadioButtonUnchecked } from 'react-icons/md';

const TaskCard = ({ title, date, priority, isCompleted, onEdit, onDelete, onToggleComplete, color }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md flex items-center justify-between ${color}`}>
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600">{date}</p>
        <p className="text-sm text-gray-500">{priority}</p> {/* Display priority */}
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={onToggleComplete}
          className={`flex items-center text-sm ${
            isCompleted ? 'text-green-500 hover:text-green-700' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {isCompleted ? <MdCheckCircle className="mr-1" /> : <MdRadioButtonUnchecked className="mr-1" />}
          {isCompleted ? 'Completed' : 'Incomplete'}
        </button>
        <button onClick={onEdit} className="text-blue-500 hover:text-blue-700">
          <MdEdit />
        </button>
        <button onClick={onDelete} className="text-red-500 hover:text-red-700">
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;