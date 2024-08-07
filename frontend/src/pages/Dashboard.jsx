import React, { useState } from "react";
import NoteCard from "../components/NoteCard";
import { MdAdd } from "react-icons/md";
import Modal from "react-modal";
import NewNote from "../components/NewNote";

const Dashboard = () => {
  const [openCreateModal, setOpenCreateModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <>
      <div className="container mx-auto">
        <div className="ml-5 grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="Meeting on 7th August"
            date="6th August 2024"
            content="you have a meeting. Need some content for this note. Fake content"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-teal-800 hover:bg-teal-500 absolute right-10 bottom-10"
        onClick={() => {
          setOpenCreateModal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openCreateModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(19, 85, 80, 0.8)",
          },
        }}
        contentLabel=""
        className="w-[60%] bg-white p-5 my-28 mx-auto rounded-2xl overflow-scroll "
      >
        <NewNote 
        type={openCreateModal.type}
        noteData={openCreateModal.data}
        onClose={()=>{
          setOpenCreateModal({isShown:false, type:"add", data:null})
        }}
        />
      </Modal>
    </>
  );
};

export default Dashboard;
