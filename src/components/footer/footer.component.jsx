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
        If you have a project that you want to get started or think you need my
        help with something, then get in touch.
      </p>

      <Link to='/contact'>
        <button className='contactBtn'>Contact me</button>
      </Link>
      <p className='copyright'>
        Christopher Hannelas © {new Date().getFullYear()} v.1.0
      </p>
    </div>
  );
}

export default Footer;
