import React from "react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

const Header = ({ onBookClick }) => {
  const [showNav, setShowNav] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // 1️⃣ When fully at top → hide
      if (current <= 20) {
        setShowNav(false);
        setLastScroll(current);
        return;
      }

      // 2️⃣ When scrolling down → show nav
      if (current > lastScroll) {
        setShowNav(true);
      }

      // 3️⃣ When scrolling up but not at top → KEEP showing
      if (current < lastScroll && current > 20) {
        setShowNav(true);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Bastian Logo" />
      </div>

      <div className="navigation_links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ourstory">Our Story</Link>
          </li>
          <li>
            <a href="#essence">The Buzz</a>
          </li>
          <li>
            <a href="#contact">Careers</a>
          </li>
        </ul>
      </div>

      <div className="btns">
        <button className="bookbtn" onClick={onBookClick}>
          {" "}
          Book Now
        </button>
      </div>

      <div className={`mobile_nav ${showNav ? "show" : ""}`}>
        {/* your menu items */}

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ourstory">Our Story</Link>
          </li>
          <li>
            <a href="#essence">The Buzz</a>
          </li>
          <li>
            <a href="#contact">Careers</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
