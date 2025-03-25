import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import CreateNote from "./pages/CreateNote";
import SideBar from "./pages/SideBar";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import Note from "./pages/Note";
import GetStarted from "./pages/GetStarted";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <NavBar toggleSidebar={toggleSidebar} user={user} setUser={setUser} />
      <div className="relative">
  {user && (
    <div
      className={`fixed top-0 left-0 mt-20 transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ width: "250px" }}
    >
      <SideBar isOpen={isSidebarOpen} />
    </div>
  )}
  <div
    className={`flex-1 transition-all duration-300 ${
      isSidebarOpen && user ? "ml-0" : "ml-0"
    }`}
  >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/note" element={<Note />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
      <Route path="/sign-out" element={<SignOut />} />
      <Route path="/create-note" element={<CreateNote />} />
      <Route path="/sidebar" element={<SideBar />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/get-started" element={<GetStarted />} />
    </Routes>
  </div>
</div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;