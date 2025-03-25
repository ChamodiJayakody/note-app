import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Sidebar } from "flowbite-react";

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
  className={`transition-transform duration-300 ${
    isOpen ? "w-auto" : "hidden"
  }`}
>
    
      <div className="mt-24">
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Items className="bg-transparent">
            <Sidebar.ItemGroup className="hover:icon-white items-center">
              <Sidebar.Item
                as={Link}
                to="/notes?tab=dashboard"
                href="#"
                icon={HiViewBoards}
                label="Pro"
                labelColor="dark"
                className={`py-3 px-1 text-lg hover:bg-teal-600 text-gray-500 font-semibold hover:shadow-2xl hover:text-white ${
                  currentPath === "?tab=dashboard" ? "bg-teal-800 text-white" : ""
                }`}
              >
                Dashboard
              </Sidebar.Item>

              <Sidebar.Item
                as={Link}
                to="/notes?tab=new-note"
                href="#"
                icon={HiPlus}
                className={`py-3 text-lg hover:bg-teal-600 text-gray-500 font-semibold hover:shadow-2xl hover:text-white ${
                  currentPath === "?tab=new-note" ? "bg-teal-800 text-white" : ""
                }`}
              >
                Create New
              </Sidebar.Item>

              <Sidebar.Item
                as={Link}
                to="/notes?tab=focus"
                href="#"
                icon={HiOutlineEmojiHappy}
                className={`py-3 text-lg hover:bg-teal-600 text-gray-500 font-semibold hover:shadow-2xl hover:text-white ${
                  currentPath === "?tab=focus" ? "bg-teal-800 text-white" : ""
                }`}
              >
                Focus
              </Sidebar.Item>

              <Sidebar.Item
                as={Link}
                to="/notes?tab=to-do"
                href="#"
                icon={HiOutlineDocumentAdd}
                className={`py-3 text-lg hover:bg-teal-600 text-gray-500 font-semibold hover:shadow-2xl hover:text-white ${
                  currentPath === "?tab=to-do" ? "bg-teal-800 text-white" : ""
                }`}
              >
                To-Do
              </Sidebar.Item>

              <Sidebar.Item
                as={Link}
                to="/notes?tab=settings"
                href="#"
                icon={HiAdjustments}
                className={`py-3 text-lg hover:bg-teal-600 text-gray-500 font-semibold hover:shadow-2xl hover:text-white ${
                  currentPath === "?tab=settings" ? "bg-teal-800 text-white" : ""
                }`}
              >
                Settings
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
}