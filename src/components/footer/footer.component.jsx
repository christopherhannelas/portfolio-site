import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './footer.component.css';

function Footer(props) {
  const { titleAnimation } = props;
  return (
    <div className='footerBox'>
      <motion.div
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: false, amount: 0.2 }}
        variants={titleAnimation}
      >
        <h1 className='footerTitle'>I can help.</h1>
      </motion.div>
      <h3 className='footerSubTitle'>
        &gt;I'm currently available for freelance work...
      </h3>

      <p className='subtext'>
        If you have a project that you want to get started, think you need my
        help with something, then get in touch.
      </p>

      <Link to='/contact'>
        <button className='contactBtn'>Contact me</button>
      </Link>
    </div>
  );
}

export default Footer;
