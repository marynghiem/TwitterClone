import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SidebarOption />
    </div>
  );
};

export default Sidebar;
