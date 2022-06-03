import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.css';

function Navbar() {
  return (
    <nav className=''>
      <ul>
        <li>
          <a id='homeNavBtn' href='#'>
            Home
          </a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Services</a>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
