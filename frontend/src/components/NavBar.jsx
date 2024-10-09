import { Navbar } from "flowbite-react";
import React, { useState } from "react";
import img2 from "../assets/write.png";
import Profile from "./Profile";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate;
  const onSignOut = () => {
    navigate("/sign-in");
  };

  const handleSearch=()=>{

  };

  const onClearSearch=()=>{
    setSearchQuery("");
  };

  return (
    <Navbar fluid rounded className="sticky top-0" style={{ zIndex: 1000 }}>
      <Navbar.Brand href="http://localhost:5173/">
        <img
          src={img2}
          className="ml-2 mt-2 h-12 w-24 sm:h-12 sm:w-24 "
          alt="Write Logo"
        />
      </Navbar.Brand>

      <Profile onSignOut={onSignOut} />

      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-xl ">
          Home
        </Navbar.Link>
        <Navbar.Link href="/notes?tab=notes" className="text-xl">
          Notes
        </Navbar.Link>
        <Navbar.Link href="/sign-up" className="text-xl">
          Sign Up
        </Navbar.Link>
      </Navbar.Collapse>

      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />
    </Navbar>
  );
};

export default NavBar;
