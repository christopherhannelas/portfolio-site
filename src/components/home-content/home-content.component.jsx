import React from 'react';
import './home-content.styles.css';
import { motion } from 'framer-motion';
import Profilepic from '../profilepic/profilepic.component';
import logoReact from '../../assets/logoreact.png';

const HomeContent = () => {
  const titleAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,

      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.8,

        duration: 0.8,
      },
    },
  };

  return (
    <div className=' blurred-box'>
      <p>Hi, my name is</p>
      <motion.div
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: false, amount: 0.2 }}
        variants={titleAnimation}
      >
        <h1 className='hometitle'>Christopher Hannelas.</h1>
      </motion.div>

      <p> a web developer </p>

      <Profilepic />
      <div className='aboutMe'>
        <motion.div
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: false, amount: 0.2 }}
          variants={titleAnimation}
        >
          <h1 className='aboutMeTitle'>About me.</h1>
        </motion.div>
        <p>
          Hello! My name is Christopher and I enjoy creating things that live on
          the internet. My interest in web development started back in the 90s
          when I learned all the basic HTML & CSS while building my first web
          pages just for fun!
        </p>
        <p>
          Fast-forward to today, after multiple years of experience in sales and
          marketing I had the privilege to work as a project manager in the
          sector of printing and design. My main focus these days is web
          development, more specificaly the developpement of React applications.
        </p>
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 1,

            repeat: Infinity,
          }}
        >
          <img className='reactLogo' src={logoReact} alt='react-Logo'></img>
        </motion.div>
      </div>
      <div className=''></div>
      <div className=''></div>
    </div>
  );
};

export default HomeContent;
