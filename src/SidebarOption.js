import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ active, text, Icon }) => {
  return (
    <div className={`sidebar_option ${active && "sidebar_option_active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
