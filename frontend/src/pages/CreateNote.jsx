import React, { useState } from "react";
import NewNote from "../components/NewNote";

function CreateNote() {
  const [noteData, setNoteData] = useState({ title: "", content: "" });

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

  const handleSubmit = async (noteid, noteData) => {
    if (!noteData.title || !noteData.content) {
      console.error("Error: Title or content is missing");
      return false;
    }

    await handleAddNote(noteData);
    return true;
  };

  return (
    <div className="w-[1000px] mx-auto mt-8">
      <NewNote
        type="add"
        noteData={noteData}
        onClose={() => console.log("Modal closed")}
        onSubmit={handleSubmit}
        showCloseButton={false} // Hide the close button
      />
    </div>
  );
}

export default CreateNote;