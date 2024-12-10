import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ onOpenModal }) => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const isStepsPage = location.pathname === "/steps";

  return (
    <nav className={`container-nav ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Logo" className="logo-nav" />
      <ul
        className={`mobile-menu ${
          mobileMenu ? "show-mobile-menu" : "hide-mobile-menu"
        } ${isStepsPage ? "steps-page-menu" : ""}`}
      >
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/steps" onClick={toggleMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/supportedcolleges" onClick={toggleMenu}>
            Supported Colleges
          </Link>
        </li>
      </ul>
      <FontAwesomeIcon
        icon={mobileMenu ? faTimes : faBars}
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
