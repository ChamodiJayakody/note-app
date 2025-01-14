import React, { useState } from "react";
import { Button, Label, Textarea } from "flowbite-react";
import { MdClose } from "react-icons/md";

const NewNote = ({ noteData, type, onClose, onSubmit }) => {
  const [title, setTitle] = useState(noteData?.title || "");
  const [content, setContent] = useState(noteData?.content || "");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title) {
      setError("Please enter the title.");
      return;
    }
    if (!content) {
      setError("Please enter the content.");
      return;
    }
    setError("");
    setIsLoading(true);

    try {
      if (typeof onSubmit !== 'function') {
        // throw new Error('onSubmit is not a function');
        console.error("onSubmit is not a function");
        return;
      }

      console.log("Calling onSubmit with:", { title, content });
      
      const success = await onSubmit(
        type === "edit" ? noteData?._id : null,
        { title, content }
      );
      
      if (success) {
        onClose();
      } else {
        setError(`Failed to ${type === "edit" ? "update" : "add"} note. Please try again.`);
      }
    } catch (err) {
      console.error("Error in handleSubmit:", err);
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 bg-gray-100"
        onClick={onClose}
      >
        <MdClose className="text-xl text-gray-500 hover:text-gray-800" />
      </button>

      <div className="flex flex-col">
        <Label className="input-label" htmlFor="title">
          Title
        </Label>
        <input
          type="text"
          id="title"
          placeholder="Grocery shopping"
          className="rounded-xl text-2xl text-gray-900 border-none"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      <div className="flex flex-col mt-4">
        <Label className="input-label" htmlFor="content">
          Content
        </Label>
        <Textarea
          type="text"
          id="content"
          placeholder="milk, eggs, bread"
          rows={10}
          className="text-sm mt-5 text-gray-900 border-none bg-gray-100 rounded outline-none font-medium"
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>

      <div className="shadow-none mt-1 rounded-lg">
        {error && (
          <p className="text-red-500 text-xs pb-1 font-semibold">{error}</p>
        )}
      </div>

      <Button
        className="btn-general mt-5 text-2xl font-medium"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? 'Saving...' : (type === 'edit' ? 'Update' : 'Add')}
      </Button>
    </div>
  );
};

export default NewNote;