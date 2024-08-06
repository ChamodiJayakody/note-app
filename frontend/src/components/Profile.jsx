import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import img5 from "../assets/user.png";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex md:order-2 ">
      <Dropdown
        className="bg-gray-200 bg-opacity-50 rounded-xl shadow-2xl border-2 border-gray-200"
        arrowIcon={false}
        inline
        label={<Avatar alt="User settings" img={img5} rounded />}
      >
        <Dropdown.Header>
          <span className="block text-sm font-medium">Bonnie Green</span>
          <span className="block truncate text-sm font-normal">
            name@flowbite.com
          </span>
        </Dropdown.Header>
        <Dropdown.Item className="font-medium">Dashboard</Dropdown.Item>
        <Dropdown.Item className="font-medium"> Settings</Dropdown.Item>
        <Dropdown.Item className="font-medium">My Notes</Dropdown.Item>
        <Dropdown.Divider />
        <Link to="/sign-out">
          <Dropdown.Item className="font-medium">Sign out</Dropdown.Item>
        </Link>
      </Dropdown>
      <Navbar.Toggle />
    </div>
  );
};

export default Profile;
