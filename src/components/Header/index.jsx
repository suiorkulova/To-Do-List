import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="container--header">
          <Link to="/">HOME</Link>
          <Link to="/Admin">ADMIN</Link>
          <Link to="/Menu">MENU</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
