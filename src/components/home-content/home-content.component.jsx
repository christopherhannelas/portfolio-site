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
    <div className=' homeContentGrid'>
      <div className='profilePicContainer'>
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
      </div>
      <div className='aboutMeContainer'>
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
          the internet.
        </p>
        <p>
          My interest in web development started back in the 90s when I learned
          all the basic HTML & CSS to building my first web pages just for fun!
        </p>
        <p>
          Fast-forward to today, with multiple years of experience in sales and
          marketing I am currently a project manager in the sector of design and
          printing. My main focus these days is web development, more
          specificaly the developpement of React applications.
        </p>
        <div className='logoBox'>
          <img className='reactLogo' src={logoReact} alt='react-Logo'></img>
        </div>
        <span className='miniText'>
          by the way, you are currently scrolling a React app{' '}
        </span>
      </div>
      <div className='skillsContainer'>
        <motion.div
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: false, amount: 0.2 }}
          variants={titleAnimation}
        >
          <h1 className='canDoTitle'>What I can do.</h1>
        </motion.div>
        <h3 className='candosubTitle'>&gt;Design what you want.</h3>
        <p>
          I like to keep it simple. My goals are to focus on the content and
          conveying the message that you want to send.
        </p>
        <h3 className='candosubTitle'>&gt;Develop what you need.</h3>
        <p>
          I'm a developer, so I know how to create your website to run across
          devices using the latest technologies available.
        </p>
      </div>
      <div className='project1'>
        <motion.div
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: false, amount: 0.2 }}
          variants={titleAnimation}
        >
          <h1 className='projectTitle'>Projects.</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeContent;
