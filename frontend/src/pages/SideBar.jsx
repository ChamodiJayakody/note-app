import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "flowbite-react";

import {
  HiAdjustments,
  HiOutlineDocumentAdd,
  HiOutlineEmojiHappy,
  HiPlus,
  HiViewBoards,
} from "react-icons/hi";

export default function SideBar({ isOpen }) {
  return (
    <div
      className={`transition-transform duration-300 ${
        isOpen ? "w-64" : "w-0"
      } overflow-hidden`}
    >
      <div className=" h-auto p-4 ">
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Items>
            <Sidebar.ItemGroup className="hover:icon-white p-4 items-center">
              <Sidebar.Item
                as={Link}
                to="/notes?tab=dashboard"
                href="#"
                icon={HiViewBoards}
                label="Pro"
                labelColor="dark"
                className="my-4 text-lg hover:bg-teal-600 text-gray-500 font-semibold hover:shadow-2xl hover:text-white"
              >
                Dashboard
              </Sidebar.Item>

              
                <Sidebar.Item
                as={Link}
                to="/notes?tab=new-note"
                  href="#"
                  icon={HiPlus}
                  className="mb-4  text-lg hover:bg-teal-600 text-gray-500 font-semibold hover:shadow-2xl hover:text-white "
                >
                  Create New
                </Sidebar.Item>
              

              
                <Sidebar.Item
                as={Link}
                to="/notes?tab=focus"
                  href="#"
                  icon={HiOutlineEmojiHappy}
                  className="mb-4  text-lg hover:bg-teal-600 text-gray-500 font-semibold hover:shadow-2xl hover:text-white "
                >
                  Focus
                </Sidebar.Item>
              

              
                <Sidebar.Item
                as={Link}
                to="/notes?tab=to-do"
                  href="#"
                  icon={HiOutlineDocumentAdd}
                  className="mb-4  text-lg hover:bg-teal-600 text-gray-500 font-semibold hover:shadow-2xl hover:text-white "
                >
                  To-Do
                </Sidebar.Item>
              

              
                <Sidebar.Item
                as={Link}
                to="/notes?tab=settings"
                  href="#"
                  icon={HiAdjustments}
                  className="mb-4 text-lg hover:bg-teal-600 text-gray-500 font-semibold hover:shadow-2xl hover:text-white"
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
