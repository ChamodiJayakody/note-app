import { Navbar } from "flowbite-react";
import React, { useState, useEffect } from "react";
import img2 from "../assets/write.png";
import Profile from "./Profile";
import { useNavigate , useSearchParams} from "react-router-dom";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const NavBar = ({ toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async (userId) => {
      try {
        const response = await fetch(`/api/user/${userId}`, {
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    

  const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      fetchUser(parsedUser._id); // Pass the userId to fetchUser
    }
  }, []);

  const onSignOut = () => {
    // Clear the user data and navigate to the sign-in page
    localStorage.removeItem("user");
    setUser(null);
    navigate("/sign-in");
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
      {user && (<button className="p-4 focus:outline-none" onClick={toggleSidebar}>
          <FaBars className="text-gray-800" />
        </button>)}
        
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

        <SearchBar
          value={searchQuery}
          onChange={({ target }) => setSearchQuery(target.value)}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />

        {!user && (
          <Navbar.Link as={Link} to="/sign-up" className="text-xl mt-2 ml-10 ">
            Sign Up
          </Navbar.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
