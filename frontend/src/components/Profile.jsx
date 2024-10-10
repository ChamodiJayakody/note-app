import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import img5 from "../assets/user.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); // Get the user data from local storage

  return (
    <div className="flex md:order-2 ">
      {user ? (
      <Dropdown
        className="bg-gray-200 bg-opacity-50 rounded-xl shadow-2xl border-2 border-gray-200"
        arrowIcon={false}
        inline
        label={<Avatar alt="User settings" img={img5} rounded />}
      >
         <Dropdown.Header>
            <span className="block text-sm font-medium">{user.firstname}{" "}{user.lastname}</span>
            <span className="block truncate text-sm font-normal">{user.email}</span>
        </Dropdown.Header>
        <Dropdown.Item className="font-medium">Dashboard</Dropdown.Item>
        <Dropdown.Item className="font-medium"> Settings</Dropdown.Item>
        <Dropdown.Item className="font-medium">My Notes</Dropdown.Item>
        <Dropdown.Divider />
        <Link to="/sign-out">
          <Dropdown.Item className="font-medium">Sign out</Dropdown.Item>
        </Link>
      </Dropdown>
      ) : (
        <Link to="/sign-in">
          <button className="bg-pink-800 hover:bg-pink-500 text-xl p-2   ring-0 ring-transparent">
            Sign in
          </button>
        </Link>
      )}
      <Navbar.Toggle />
    </div>
  );
};

export default Profile;
