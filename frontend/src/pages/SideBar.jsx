import { Button } from "flowbite-react";

import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import {
  HiAdjustments,
  HiArrowSmRight,
  HiPlus,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export default function SideBar() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="hover:icon-white">
          <Link to="/notes?tab=new-note">
            <Sidebar.Item
              href="#"
              icon={HiPlus}
              className="my-4 text-lg hover:bg-green-400 text-gray-500 font-semibold hover:shadow-2xl hover:text-white "
            >
              Create New
            </Sidebar.Item>
          </Link>

          <Link to="/notes?tab=dashboard">
            <Sidebar.Item
              href="#"
              icon={HiViewBoards}
              label="Pro"
              labelColor="dark"
              className="mb-4 text-lg hover:bg-green-400 text-gray-500 font-semibold hover:shadow-2xl hover:text-white"
            >
              Dashboard
            </Sidebar.Item>
          </Link>

          <Link to="/notes?tab=users">
            <Sidebar.Item
              href="#"
              icon={HiUser}
              className="mb-4 text-lg hover:bg-green-400 text-gray-500 font-semibold hover:shadow-2xl hover:text-white"
            >
              Users
            </Sidebar.Item>
          </Link>

          <Link to="/notes?tab=settings">
            <Sidebar.Item
              href="#"
              icon={HiAdjustments}
              className="mb-4 text-lg hover:bg-green-400 text-gray-500 font-semibold hover:shadow-2xl hover:text-white"
            >
              Settings
            </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
