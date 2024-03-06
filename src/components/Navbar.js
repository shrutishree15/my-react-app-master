import React from 'react';
import { CiSearch } from 'react-icons/ci';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="container">
        <div className="relative search-bar">
          <input
            type="text" 
            className="input"
            style={{ paddingLeft: '40px', paddingRight: '40px' }}
          />
          <CiSearch className="search-icon" />
        </div>

        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              Categories
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
            Website Builder 
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Today's Deal
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
