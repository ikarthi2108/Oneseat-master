import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUsNavbar.css';  // Custom CSS for the About Us Navbar

const AboutUsNavbar = () => {
  return (
    <nav className="aboutus-navbar">
      <div className="container">
        <a href="/" className="navbar-brand">Brand</a>
        <ul className="navbar-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default AboutUsNavbar;
