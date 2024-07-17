import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import CreateNote from "./pages/CreateNote";
import SideBar from "./pages/SideBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/create-note" element={<CreateNote />} />
        <Route path="/sidebar" element={<SideBar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
