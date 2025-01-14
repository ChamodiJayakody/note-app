import React, { useState } from "react";
import Modal from "react-modal";

function CreateNote() {
  const [noteData, setNoteData] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoteData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddNote = async (noteData) => {
    try {
      const response = await fetch("/api/note/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(noteData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to create note: ${errorText}`);
      }

      const newNote = await response.json();
      console.log("Note Added:", newNote);
      return newNote;
    } catch (error) {
      console.error("Error adding note:", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!noteData.title || !noteData.content) {
      console.error("Error: Title or content is missing");
      return;
    }

    await handleAddNote(noteData);
  };

  return (
    <div className="w-[1000px] mx-auto mt-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            className="block text-lg font-medium text-gray-700"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={noteData.title}
            onChange={handleChange}
            className="w-full p-2 mt-1 text-xl border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Grocery shopping"
            required
          />
        </div>

        <div>
          <label
            className="block text-lg font-medium text-gray-700"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            name="content"
            id="content"
            value={noteData.content}
            onChange={handleChange}
            className="w-full p-3 mt-1 text-sm bg-gray-100 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="milk, eggs, bread"
            rows="7"
            required
          />
        </div>

        <button
          className="w-full px-4 py-3 text-lg font-medium text-white bg-teal-700 rounded-md hover:bg-teal-600"
          type="submit"
        >
          Add Note
        </button>
      </form>
    </div>
  );
}

export default CreateNote;
