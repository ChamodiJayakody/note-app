import { Navbar } from "flowbite-react";
import React, { useState } from "react";
import img2 from "../assets/write.png";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const NavBar = ({ toggleSidebar, user, setUser }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onSignOut = () => {
    // Clear the user data and navigate to the sign-in page
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const handleSearch = () => {
    // Implement search functionality
  };

  const onClearSearch = () => {
    setSearchQuery("");
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
          className="text-xl mt-2 hover:text-pink-500"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to={user ? "/notes?tab=notes" : "/note"}
          className="text-xl mt-2 hover:text-pink-500"
        >
          Notes
        </Navbar.Link>

        {user && (
          <SearchBar
            value={searchQuery}
            onChange={({ target }) => setSearchQuery(target.value)}
            handleSearch={handleSearch}
            onClearSearch={onClearSearch}
          />
        )}

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
