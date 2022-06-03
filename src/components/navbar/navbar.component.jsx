import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.css';

function Navbar(props) {
  const page = props;

  //to delete :
  // console.log(page.contact);
  // console.log(page.home);

  return (
    <nav className=''>
      <ul>
        {!page.home && (
          <li>
            <Link to='/'>Home</Link>
          </li>
        )}
        <li>
          <a href='#'>About</a>
        </li>

        <li>
          <a href='#'>Services</a>
        </li>
        {!page.contact && (
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
