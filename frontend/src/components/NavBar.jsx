import { Navbar } from "flowbite-react";
import React, { useState } from "react";
import img2 from "../assets/write.png";
import Profile from "./Profile";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const NavBar = ({ toggleSidebar, user, setUser }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onSignOut = () => {
    // Clear the user data and navigate to the sign-in page
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const isActive = (path) => {
    const [basePath, query] = path.split("?");
    const isPathMatch = location.pathname === basePath;
    const isQueryMatch = query ? location.search === `?${query}` : true;
    return isPathMatch && isQueryMatch;
  };

  return (
    <Navbar
      fluid
      rounded
      className="sticky top-0 shadow-md"
      style={{ zIndex: 1000 }}
    >
      <div className="flex items-center">
        {user && (
          <button className="p-4 focus:outline-none" onClick={toggleSidebar}>
            <FaBars className="text-gray-800" />
          </button>
        )}
        <Navbar.Brand as={Link} to="/">
          <img
            src={img2}
            className="ml-2 mt-2 h-12 w-24 sm:h-12 sm:w-24"
            alt="Write Logo"
          />
        </Navbar.Brand>
      </div>

      <Profile user={user} onSignOut={onSignOut} />

      <Navbar.Collapse>
        <Navbar.Link
          as={Link}
          to="/"
          className={`text-xl mt-2 hover:text-pink-500 ${
            isActive("/") ? "text-pink-500 font-bold" : ""
          }`}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to={user ? "/notes?tab=notes" : "/note"}
          className={`text-xl mt-2 hover:text-pink-500 ${
            isActive(user ? "/notes?tab=notes" : "/note")
              ? "text-pink-500 font-bold"
              : ""
          }`}
        >
          Notes
        </Navbar.Link>

       

        {!user && (
          <Navbar.Link as={Link} to="/sign-up" className="text-xl mt-1 ml-40 ">
            <button className="  text-xl p-1.5 text-pink-800 rounded-2xl ring-2 ring-pink-800 hover:text-pink-500 hover:ring-pink-500">
            Sign Up
          </button>
          </Navbar.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
