import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.css';

function Navbar(props) {
  const page = props;

  return (
    <nav className=''>
      <ul>
        {!page.home && (
          <li>
            <Link to='/'>Home</Link>
          </li>
        )}
        {!page.about && (
          <li>
            <Link to='/about'>About</Link>
          </li>
        )}
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
