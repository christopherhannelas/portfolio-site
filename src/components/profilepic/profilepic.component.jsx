import React from 'react';
import { motion } from 'framer-motion';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

import './profilepic.styles.css';

const profilePicAnimate = {
  offscreen: { x: 100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 2,
    },
  },
};
const Profilepic = () => {
  return (
    <motion.div
      className='container-p'
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: false, amount: 0.5 }}
      variants={profilePicAnimate}
    >
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
    </motion.div>
  );
};

export default Profilepic;
