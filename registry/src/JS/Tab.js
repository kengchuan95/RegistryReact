import React from "react";
import "../CSS/tab.css";

function CustomTab({ tab, id, onClick }) {
  return <button onClick={(e) => onClick(e.id)}>{tab}</button>;
}

export default CustomTab;
