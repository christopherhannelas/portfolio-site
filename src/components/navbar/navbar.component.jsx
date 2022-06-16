import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.css';
import logowhite from '../../assets/logo.png';

function Navbar() {
  return (
    <nav className=''>
      <ul>
        <li>
          <Link to='/mycode'>myCode</Link>
        </li>

        <li>
          <Link to='/'>
            <img className='navLogo' src={logowhite} alt='logoSmall'></img>
          </Link>
        </li>

        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
