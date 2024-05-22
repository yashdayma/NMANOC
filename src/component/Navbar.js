import React, { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand"></div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <a href="#home" className="navbar-item">Home</a>
          <a href="#about" className="navbar-item">Register as Applicant</a>
          <a href="#services" className="navbar-item">Login as Applicant</a>
          <a href="#contact" className="navbar-item">Login as CA</a>
          <a href="#contact" className="navbar-item">Login as NMA</a>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          // padding: 1rem;
          background-color: #333;
          color: white;
        }

        .navbar-brand {
          font-size: 1.5rem;
        }

        .navbar-toggle {
          display: none;
          font-size: 1.5rem;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        .navbar-menu {
          display: flex;
          gap: 1rem;
          // padding: 1.5rem 0; # this can increase height of the bar 
        }

        .navbar-item {
          color: white;
          text-decoration: none;
        }

        .navbar-item:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .navbar-toggle {
            display: block;
          }

          .navbar-menu {
            display: none;
            flex-direction: column;
            width: 100%;
            text-align: center;
            background-color: #333;
            position: absolute;
            top: 1.5rem;
            left: 0;
          }

          .navbar-menu.open {
            display: flex;
          }

          .navbar-item {
            padding: 1.5rem 0;
          }
        }
      `}</style>
    </div>
  );
}

export default NavBar;
