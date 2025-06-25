import React, { useState } from 'react';
import logo from '../assets/Logo.png'; 
import '../styles/Navbar.css'; 

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Navbar */}
      <div className="mobile-navbar d-lg-none px-3 py-3 d-flex justify-content-between align-items-center">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <button
          onClick={() => setMenuOpen(true)}
          className="btn hamburger-btn"
        >
          &#9776;
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="mobile-overlay-menu d-lg-none">
          <button
            className="btn close-btn"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
          <nav className="d-flex flex-column align-items-start p-4 gap-3">
            <a href="#" className="menu-link">HOME</a>
            <a href="#" className="menu-link">SERVICES</a>
            <a href="#" className="menu-link">ABOUT US</a>
            <a href="#" className="menu-link">CONTACT US</a>
            <a href="#" className="menu-link">CAREERS</a>
          </nav>
        </div>
      )}

      {/* Desktop Navbar */}
      <div className="desktop-navbar d-none d-lg-flex bg-4F46E5 py-4 fixed-top w-100">
        <div className="container d-flex justify-content-between align-items-center">
          <img src={logo} alt="Logo" height="30" style={{ marginRight: '20px', marginLeft: '-40px' }} />
          <nav className="d-flex gap-4">
            <a href="#" className="text-white text-decoration-none">SERVICES</a>
            <a href="#" className="text-white text-decoration-none">ABOUT US</a>
            <a href="#" className="text-white text-decoration-none">CONTACT US</a>
            <a href="#" className="text-white text-decoration-none">CAREERS</a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
