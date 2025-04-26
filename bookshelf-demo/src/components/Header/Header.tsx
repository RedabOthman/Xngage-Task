import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.jpg";
import "../../assets/styles/header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="header" role="banner">
      <div className="container">
        <a href="/" className="logo">
          <img src={logo} alt="Bookshelf Logo" />
        </a>
        <nav
          className={`nav ${isMobileMenuOpen ? "open" : ""}`}
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className="nav-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li className="books-link">
              <a href="#books"> Books <span className="arrow">▼</span></a>
            </li>
            <li>
              <a href="#Reviews">Reviews</a>
            </li>
            <li>
              <a href="#New">New</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li className="search-icon">
              <a href="#search" aria-label="Search">
                <i className="fa fa-search"></i>
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="burger-icon"></span>
          <span className="burger-icon"></span>
          <span className="burger-icon"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;