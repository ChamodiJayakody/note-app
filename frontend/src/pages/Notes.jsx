import React, { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import { useLocation } from "react-router-dom";
import Focus from "./Focus";
import Settings from "./Settings";
import Dashboard from "./Dashboard";
import bg from "../assets/notesbg.png";
import Note from "./Note";
import ToDo from "./ToDo";
import GetStarted from "./GetStarted";

export default function Notes() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="flex min-h-screen mt-20">
      <img
        src={bg}
        alt="Background Image"
        className="fixed inset-0 w-screen"
        style={{ zIndex: -2, opacity: 1 }}
      />
      {tab === "new-note" && <CreateNote />}
      {tab === "dashboard" && <Dashboard />}
      {tab === "focus" && <Focus />}
      {tab === "settings" && <Settings />}
      {tab === "notes" && <Note />}
      {tab === "to-do" && <ToDo />}
      {tab === "get-started" && <GetStarted />}
    </div>
  );
}