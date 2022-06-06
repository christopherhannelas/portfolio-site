import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='blurred-box'>
      <h1>I can help!</h1>
      <h2>I'm currently available for freelance work...</h2>
      <h6>
        If you have a project that you want to get started, think you need my
        help with something or just fancy saying hey, then get in touch.
      </h6>
      <div>
        <Link to='/contact'>
          <button>Contact me</button>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
