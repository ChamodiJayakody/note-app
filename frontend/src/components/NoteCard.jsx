import React from "react";
import {
  MdOutlinePushPin,
  MdCreate,
  MdDelete,
  MdPushPin,
} from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
  color,
}) => {



  return (
    <div
      className={`rounded-lg p-4 shadow-md ${color} hover:shadow-xl transition-all ease-in-out`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">{title}</h3>
        <MdPushPin
          className={`cursor-pointer ${
            isPinned ? "text-gray-900" : "text-gray-400"
          }`}
          onClick={onPinNote}
        />
      </div>
      <p className="text-xs text-gray-500">{date}</p>
      
      <div
        className="text-sm text-gray-700 mt-2 note-content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      <div className="flex items-center justify-end mt-2">
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
