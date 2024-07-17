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
      <Sidebar.Items className=" text-gray-700">
        <Sidebar.ItemGroup>
          <Link to="/notes?tab=new-note">
            <Sidebar.Item href="#" icon={HiPlus}>
              Create New
            </Sidebar.Item>
          </Link>

          <Link to="/notes?tab=dashboard">
            <Sidebar.Item
              href="#"
              icon={HiViewBoards}
              label="Pro"
              labelColor="dark"
            >
              Dashboard
            </Sidebar.Item>
          </Link>

          <Link to="/notes?tab=users">
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
          </Link>

          <Link to="/notes?tab=settings">
            <Sidebar.Item href="#" icon={HiAdjustments}>
              Settings
            </Sidebar.Item>
          </Link>

          <Link to="/notes?tab=signin">
            <Sidebar.Item href="#" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
          </Link>

          <Link to="/notes?tab=signup">
            <Sidebar.Item href="#" icon={HiTable}>
              Sign Up
            </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
