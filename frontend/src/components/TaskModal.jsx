import React, { useState } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';

const TaskModal = ({ isOpen, onClose, onSubmit, task }) => {
  const [text, setText] = useState(task?.text || '');
  const [dueDate, setDueDate] = useState(task?.dueDate || '');

  const handleSubmit = () => {
    if (!text || !dueDate) return;
    onSubmit({ text, dueDate });
    onClose();
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
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>{task ? 'Update' : 'Add'}</Button>
        <Button color="gray" onClick={onClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskModal;