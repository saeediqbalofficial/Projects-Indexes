import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-items" id="home">
        {/* <div className="logo">Logo</div> */}
        <div className="site-title">Github.com/saeediqbalofficial</div>
        <div className="nav-menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#social-handles">Social Handles</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
