import React, { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="btn" />
          <span
            className="logo"
            style={{
              background: "linear-gradient(to right, #d00000, #e85d04, #faa307)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontSize: "25px",
              fontFamily: "Roboto",
            }}
          >
            Nomaan.
          </span>
        

        <nav className={`navbar ${isNavOpen ? "active" : ""}`}>
          <ul className="navbar-list">
            <li>
              <Link to="/" className="navbar-link" >
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="navbar-link" >
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="navbar-link" >
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="navbar-link" >
                Project
                </Link>
            </li>
            <li>
              <Link to="/contact" className="navbar-link" > 
                Contact
                </Link>
            </li>
          </ul>
        </nav>

        <button className="nav-open-btn btn" aria-label="Open menu" onClick={toggleNav}>
          <span className="line line-1"></span>
          <span className="line line-2"></span>
        </button>

        {isNavOpen && <div className="overlay" onClick={toggleNav}></div>}
      </div>
    </header>
  );
};

export default Header;
