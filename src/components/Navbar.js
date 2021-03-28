import React from 'react';

import { Link } from 'react-router-dom';

import  '../styles/Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <i className="fas fa-home"></i>
      </Link>
    </nav>
  )
}

export default Navbar
