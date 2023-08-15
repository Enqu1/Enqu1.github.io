import React from "react";
import viteLogo from "/vite.svg";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-items">
        <img src={viteLogo} alt="vitelogo" className="logo" />
        <div className="home">Home</div>
      </div>
    </div>
  );
}

export default Topbar;
