import React, { useState, useEffect } from "react";
import NoteCard from "../components/NoteCard";
import { MdAdd } from "react-icons/md";
import Modal from "react-modal";
import NewNote from "../components/NewNote";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [openCreateModal, setOpenCreateModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  const navigate = useNavigate();
  const colors = [
    "bg-red-200",
    "bg-green-200",
    "bg-blue-200",
    "bg-yellow-200",
    "bg-purple-200",
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      console.log("Fetching notes...");
      const response = await fetch("/api/note/get", {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched notes:", data);

        const sortedNotes = data.sort((a, b) => b.isPinned - a.isPinned);
        setNotes(sortedNotes);
      } else if (response.status === 401) {
        navigate("/sign-in");
      } else {
        console.error("Failed to fetch notes");
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const handleDeleteNote = async (noteid) => {
    try {
      const response = await fetch(`/api/note/delete/${noteid}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (response.ok) {
        setNotes(notes.filter((note) => note._id !== noteid));
      } else if (response.status === 404) {
        console.error("Note not found");
      } else {
        console.error("Failed to delete note");
      }
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handlePinNote = async (noteid) => {
    try {
      const response = await fetch(`/api/note/pin/${noteid}`, {
        method: "PUT",
        credentials: "include", 
      });
      if (response.ok) {
        const updatedNote = await response.json();
        window.location.reload();
        setNotes((prevNotes) =>
          prevNotes.map((note) => (note._id === noteid ? updatedNote : note))
        );
      } else {
        console.error("Failed to pin note");
      }
    } catch (error) {
      console.error("Error pinning note:", error);
    }
  };

  const handleAddNote = async (noteData) => {
    try {
      console.log("Attempting to add note:", noteData);
      const response = await fetch("/api/note/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(noteData),
      });
      if (response.status === 401) {
        console.log("Unauthorized - redirecting to login");
        navigate("/sign-in");
        return false;
      }
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error:", errorData);
        return false;
      }

      const newNote = await response.json();
      setNotes([...notes, newNote]);
      return true;
    } catch (error) {
      console.error("Error adding note:", error);
      return false;
    }
  };

  const handleUpdateNote = async (noteid, noteData) => {
    try {
      const response = await fetch(`http://localhost:3000/api/note/update/${noteid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Add this line
        body: JSON.stringify(noteData),
      });
      if (response.ok) {
        const updatedNote = await response.json();
        setNotes((prevNotes) =>
          prevNotes.map((note) => (note._id === noteid ? updatedNote : note))
        );
        return true;
      } else {
        console.error("Failed to update note");
        return false;
      }
    } catch (error) {
      console.error("Error updating note:", error);
      return false;
    }
  };

  const handleSubmit = async (noteid, noteData) => {
    console.log("handleSubmit called with:", noteid, noteData);
    if (openCreateModal.type === "add") {
      return await handleAddNote(noteData);
    } else {
      return await handleUpdateNote(noteid, noteData);
    }
  };

  const handleSearch = () => {
    // Implement search functionality
  };

  const onClearSearch = () => {
    setSearchQuery("");
  };

  const openDeleteModal = (noteid) => {
    setNoteToDelete(noteid);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteNote = () => {
    handleDeleteNote(noteToDelete);
    setIsDeleteModalOpen(false);
    setNoteToDelete(null);
  };

  return (
    <div className="container p-4  mx-auto">
    
      <div >
        <SearchBar
        
          value={searchQuery}
          onChange={({ target }) => setSearchQuery(target.value)}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
        <div className=" grid grid-cols-3 gap-4 mt-4">
          {notes.map((note) => (
            <NoteCard
              key={note._id}
              title={note.title}
              date={new Date(note.createdAt).toLocaleDateString()}
              content={note.content}
              isPinned={note.isPinned}
              onEdit={() => {
                setOpenCreateModal({ isShown: true, type: "edit", data: note });
              }}
              onDelete={() => openDeleteModal(note._id)}
              onPinNote={() => handlePinNote(note._id)}
              color={getRandomColor()} // Pass the random color as a prop
            />
          ))}
        </div>
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-teal-800 hover:bg-teal-600 fixed right-10 bottom-10"
        onClick={() => {
          setOpenCreateModal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openCreateModal.isShown}
        onRequestClose={() => {
          setOpenCreateModal({ isShown: false, type: "add", data: null });
        }}
        style={{
          overlay: {
            backgroundColor: "rgba(19, 85, 80, 0.8)",
          },
        }}
        contentLabel=""
        className="w-[60%] bg-white p-5 my-28 mx-auto rounded-2xl overflow-scroll"
      >
        <NewNote
          type={openCreateModal.type}
          noteData={openCreateModal.data}
          onClose={() => {
            setOpenCreateModal({ isShown: false, type: "add", data: null });
          }}
          onSubmit={handleSubmit}
        />
      </Modal>

      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={() => setIsDeleteModalOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(19, 85, 80, 0.8)",
          },
        }}
        contentLabel="Delete Confirmation"
        className="w-[30%] bg-white p-5 my-28 mx-auto rounded-2xl overflow-scroll"
      >
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
          <p>Are you sure you want to delete this note?</p>
          <div className="flex justify-center mt-4">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              onClick={confirmDeleteNote}
            >
              Yes
            </button>
            <button
              className="bg-gray-300 text-black px-4 py-2 rounded"
              onClick={() => setIsDeleteModalOpen(false)}
            >
              No
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;
