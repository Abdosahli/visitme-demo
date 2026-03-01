import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Navbar/Navbar.css";
import logo from "../assets/image.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Restaurants", path: "/category/restaurants" },
    { name: "Hotels", path: "/category/hotels" },
    { name: "Bars", path: "/category/bars" },
    { name: "Spas", path: "/category/spas" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="logo-link">
            <img 
              src={logo}
              alt="VisitMe Logo"
              className="logo-img"
            />

            <span className="logo-title">
              <span className="visit">Visit</span>
              <span className="me">Me</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="nav-link">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <Link to="/login" className="login-btn">
            Log In
          </Link>
          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="mobile-auth">
            <Link to="/login" className="mobile-login-btn">Log In</Link>
            <Link to="/signup" className="mobile-signup-btn">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;