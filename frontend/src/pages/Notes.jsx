import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import CreateNote from "./CreateNote";
import { useLocation } from "react-router-dom";
import Focus from "./Focus";
import Settings from "./Settings";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
import Note from "./Note";
import ToDo from "./ToDo";


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
    <div className="flex min-h-screen">
      
      <div>
        <SideBar />
      </div>
      {tab === "new-note" && <CreateNote />}
      {tab === "dashboard" && <Dashboard />}
      {tab === "focus" && <Focus />}
      {tab === "settings" && <Settings />}
      {tab === "notes" && <Note />}
      {tab === "to-do" && <ToDo />}
    </div>
  );
}