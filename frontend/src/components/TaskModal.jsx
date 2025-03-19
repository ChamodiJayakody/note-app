import React, { useState } from 'react';
import { Button, Label, Modal, TextInput, Select } from 'flowbite-react';
import { MdDelete, MdSave } from 'react-icons/md';

const TaskModal = ({ isOpen, onClose, onSubmit, onDelete, task }) => {
  const [text, setText] = useState(task?.text || '');
  const [dueDate, setDueDate] = useState(task?.dueDate || '');
  const [priority, setPriority] = useState(task?.priority || 'Not Urgent & Not Important');

  const handleSubmit = () => {
    if (!text || !dueDate) return;
    onSubmit({ ...task, text, dueDate, priority });
    onClose();
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(task._id);
      onClose();
    }
  };

  return (
    <Modal show={isOpen} onClose={onClose}>
      <Modal.Header>{task ? 'Edit Task' : 'Add Task'}</Modal.Header>
      <Modal.Body>
        <div className="space-y-4">
          <div>
            <Label htmlFor="text">Task</Label>
            <TextInput
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="dueDate">Due Date</Label>
            <TextInput
              id="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div>
  <Label htmlFor="priority">Priority</Label>
  <Select
    id="priority"
    value={priority}
    onChange={(e) => setPriority(e.target.value)}
  >
    <option value="Urgent & Important">Urgent & Important</option>
    <option value="Urgent but Not Important">Urgent but Not Important</option>
    <option value="Not Urgent but Important">Not Urgent but Important</option>
    <option value="Not Urgent & Not Important">Not Urgent & Not Important</option>
  </Select>
</div>
          <div>
            <Label htmlFor="priority">Priority</Label>
            <Select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="Urgent & Important">Urgent & Important</option>
              <option value="Urgent but Not Important">Urgent but Not Important</option>
              <option value="Not Urgent but Important">Not Urgent but Important</option>
              <option value="Not Urgent & Not Important">Not Urgent & Not Important</option>
            </Select>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="flex justify-between w-full">
          <button
            onClick={handleDelete}
            className="flex items-center text-red-500 hover:text-red-700"
          >
            <MdDelete className="mr-1" />
            Delete
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center text-green-500 hover:text-green-700"
          >
            <MdSave className="mr-1" />
            {task ? 'Update' : 'Add'}
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskModal;