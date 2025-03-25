import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HiAdjustments,
  HiOutlineDocumentAdd,
  HiOutlineEmojiHappy,
  HiPlus,
  HiViewBoards,
} from "react-icons/hi";

export default function SideBar({ isOpen }) {
  const location = useLocation();
  const currentPath = location.search;

  return (
    <div
      className={`transition-all duration-300 bg-opacity-50 backdrop-blur-xl bg-gray-100 shadow-2xl rounded-r-3xl mt-20 p-3 ${
        isOpen ? "w-[200px]" : "w-[80px]"
      }`}
    >
      <ul className="space-y-4">
        <li>
          <Link
            to="/notes?tab=dashboard"
            className={`flex items-center ${
              isOpen ? "gap-3" : "justify-center"
            } p-3 text-lg font-semibold rounded-lg hover:bg-teal-600 hover:text-white ${
              currentPath === "?tab=dashboard" ? "bg-teal-800 text-white" : "text-gray-600"
            }`}
          >
            <HiViewBoards className="text-2xl" />
            {isOpen && <span>Dashboard</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/notes?tab=new-note"
            className={`flex items-center ${
              isOpen ? "gap-3" : "justify-center"
            } p-3 text-lg font-semibold rounded-lg hover:bg-teal-600 hover:text-white ${
              currentPath === "?tab=new-note" ? "bg-teal-800 text-white" : "text-gray-600"
            }`}
          >
            <HiPlus className="text-2xl" />
            {isOpen && <span>Create New</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/notes?tab=focus"
            className={`flex items-center ${
              isOpen ? "gap-3" : "justify-center"
            } p-3 text-lg font-semibold rounded-lg hover:bg-teal-600 hover:text-white ${
              currentPath === "?tab=focus" ? "bg-teal-800 text-white" : "text-gray-600"
            }`}
          >
            <HiOutlineEmojiHappy className="text-2xl" />
            {isOpen && <span>Focus</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/notes?tab=to-do"
            className={`flex items-center ${
              isOpen ? "gap-3" : "justify-center"
            } p-3 text-lg font-semibold rounded-lg hover:bg-teal-600 hover:text-white ${
              currentPath === "?tab=to-do" ? "bg-teal-800 text-white" : "text-gray-600"
            }`}
          >
            <HiOutlineDocumentAdd className="text-2xl" />
            {isOpen && <span>To-Do</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/notes?tab=settings"
            className={`flex items-center ${
              isOpen ? "gap-3" : "justify-center"
            } p-3 text-lg font-semibold rounded-lg hover:bg-teal-600 hover:text-white ${
              currentPath === "?tab=settings" ? "bg-teal-800 text-white" : "text-gray-600"
            }`}
          >
            <HiAdjustments className="text-2xl" />
            {isOpen && <span>Settings</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
}