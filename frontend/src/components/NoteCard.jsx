import React from "react";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({ title, date, content, isPinned, onEdit, onDelete, onPinNote, color }) => {
  return (
    <div className={`rounded-lg p-4 ${color} hover:shadow-xl transition-all ease-in-out`}>
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs text-gray-500">{date}</span>
        </div>

        <MdOutlinePushPin
          className={`icon-btn ${isPinned ? "text-gray-800" : "text-gray-500"}`}
          onClick={onPinNote}
        />
      </div>

      <p className="text-xs text-gray-700 mt-2">{content?.slice(0, 60)}</p>

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2">
          <MdCreate
            className="icon-btn hover:text-green-500"
            onClick={onEdit}
          />
          <MdDelete
            className="icon-btn hover:text-red-500"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;