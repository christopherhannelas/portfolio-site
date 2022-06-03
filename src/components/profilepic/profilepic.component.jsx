import React from 'react';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

import './profilepic.styles.css';

const Profilepic = () => {
  return (
    <div className='container-p'>
      <div className=' card card0'>
        <div className='borderprofile'>
          <div className='profiletitle'> Christopher</div>
          <div className='icons'>
            <a
              href='https://twitter.com/ChrisHannelas'
              target='_blank'
              rel='noreferrer'
            >
              <img className='social' src={twitter} alt='twitter logo' />
            </a>
            <a
              href='https://www.facebook.com/christopherhannelas/'
              target='_blank'
              rel='noreferrer'
            >
              <img className='social' src={facebook} alt='fb logo' />
            </a>
            <a
              href='https://www.linkedin.com/in/christopher-hannelas-a56747209/'
              target='_blank'
              rel='noreferrer'
            >
              <img className='social' src={linkedin} alt='github logo' />
            </a>
            <a
              href='https://github.com/christopherhannelas'
              target='_blank'
              rel='noreferrer'
            >
              <img className='social' src={github} alt='github logo' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilepic;
