import React from 'react';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import linkedin from '../../assets/linkedin.png';
import facebook from '../../assets/facebook.png';
import mailLogo from '../../assets/envelope.png';

import whatsapp from '../../assets/whatsapp.png';
import './contact-content-styles.css';

function ContactContent(props) {
  const { contactTitleAnimation } = props;
  const constraintsRef = useRef(null);
  return (
    <div className=' contactBox'>
      <motion.div
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: false, amount: 0.2 }}
        variants={contactTitleAnimation}
      >
        <h1 className='contactTitle'>Contact me.</h1>
      </motion.div>
      <h3 className='contactSubTitle'>&gt;Grab my contact details:</h3>
      <div className='instruction'>
        <p>✨ Feel free to get in touch (or just touch 👇 ! ) </p>
      </div>
      <motion.div className='contactContainer' ref={constraintsRef}>
        <motion.div
          className='item mailBox'
          drag
          dragConstraints={constraintsRef}
        >
          <a href='mailto:christopherhannelas@gmail.com'>
            <img className='contactIcon' src={mailLogo} alt='Mail icon'></img>
          </a>
          <u>christopherhannelas@gmail.com</u>
        </motion.div>
        <motion.div
          className='item linkedinbox'
          drag
          dragConstraints={constraintsRef}
        >
          <a
            href='https://www.linkedin.com/in/christopher-hannelas-a56747209/'
            target='_blank'
            rel='noreferrer'
          >
            <img className='contactIcon' src={linkedin} alt='Mail icon'></img>
          </a>
          <u> Linkedin</u>
        </motion.div>
        <motion.div
          className='item facebookBox'
          drag
          dragConstraints={constraintsRef}
        >
          <a
            href='https://www.facebook.com/christopherhannelas/'
            target='_blank'
            rel='noreferrer'
          >
            <img className='contactIcon' src={facebook} alt='Mail icon'></img>
          </a>
          <u>Facebook</u>
        </motion.div>
        <motion.div
          className='item phoneBox'
          drag
          dragConstraints={constraintsRef}
        >
          <img src={whatsapp} alt='Mail icon'></img>📱 +230 57830438
        </motion.div>
      </motion.div>

      <div className=''>
        <h3 className='contactSubTitle'>
          &gt;I'm currently available for freelance work...
        </h3>

        <p className='subtext'>
          If you have a project that you want to get started or think you need
          my help with something, then get in touch.
        </p>
        <p className='copyright'>
          Christopher Hannelas © {new Date().getFullYear()} v.1.0
        </p>
      </div>
    </div>
  );
}

export default ContactContent;
