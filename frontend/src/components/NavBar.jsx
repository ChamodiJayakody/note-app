import { Navbar } from "flowbite-react";
import React, { useState, useEffect } from "react";
import img2 from "../assets/write.png";
import Profile from "./Profile";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

// const NavBar = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate;
//   const [user, setUser] = useState(null);
//   const onSignOut = () => {
//     navigate("/sign-in");
//     setUser(null);
//   };

//   const handleSearch=()=>{

//   };

//   const onClearSearch=()=>{
//     setSearchQuery("");
//   };

//   return (
//     <Navbar fluid rounded className="sticky top-0 shadow-md" style={{ zIndex: 1000 }}>
//       <Navbar.Brand href="http://localhost:5173/">
//         <img
//           src={img2}
//           className="ml-2 mt-2 h-12 w-24 sm:h-12 sm:w-24 "
//           alt="Write Logo"
//         />
//       </Navbar.Brand>

//       <Profile user={user} onSignOut={onSignOut} />

//       <Navbar.Collapse>
//         <Navbar.Link href="/" className="text-xl ">
//           Home
//         </Navbar.Link>
//         <Navbar.Link href="/note" className="text-xl">
//           Notes
//         </Navbar.Link>
//         <Navbar.Link href="/sign-up" className="text-xl">
//           Sign Up
//         </Navbar.Link>
//       </Navbar.Collapse>

//       <SearchBar
//         value={searchQuery}
//         onChange={({ target }) => {
//           setSearchQuery(target.value);
//         }}
//         handleSearch={() => {}}
//         onClearSearch={() => {}}
//       />
//     </Navbar>
//   );
// };

// export default NavBar;

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is signed in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const onSignOut = () => {
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
      <Navbar.Brand as={Link} to="/">
        <img
          src={img2}
          className="ml-2 mt-2 h-12 w-24 sm:h-12 sm:w-24"
          alt="Write Logo"
        />
      </Navbar.Brand>

      <Profile user={user} onSignOut={onSignOut} />

      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" className="text-xl mt-2 ">
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to={user ? "/notes?tab=notes" : "/note"}
          className="text-xl mt-2"
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