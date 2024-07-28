import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import CreateNote from "./CreateNote";
import { useLocation } from "react-router-dom";
import Users from "./Users";
import Settings from "./Settings";
import Dashboard from "./Dashboard";

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
    <div className="sm:flex min-h-screen">
      <div>
        <SideBar />
      </div>
      {tab=== "new-note" && <CreateNote />}
      {tab=== "dashboard" && < Dashboard/>}
      {tab=== "users" && <Users />}
      {tab=== "settings" && <Settings />}
      
      
    </div>
  );
}
