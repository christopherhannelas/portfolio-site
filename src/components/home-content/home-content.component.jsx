import React from 'react';
import './home-content.styles.css';
import { motion } from 'framer-motion';
import Profilepic from '../profilepic/profilepic.component';
import Project from '../project/project.component';
import logoReact from '../../assets/logoreact.png';

const HomeContent = (props) => {
  const { titleAnimation } = props;

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
          <h1 className='hometitle'>About me.</h1>
        </motion.div>
        <div className='textDiv'>
          <p>
            Hello! My name is Christopher and I enjoy creating things that live
            on the internet.
          </p>
          <p>
            My interest in web development started back in the 90s when I
            learned all the basic HTML & CSS to building my first web pages just
            for fun!
          </p>
          <p>
            Fast-forward to today, with multiple years of experience in sales
            and marketing I am currently a project manager in the sector of
            design and printing. My main focus these days is web development,
            more specificaly the developpement of React applications.
          </p>
        </div>
        <div className='logoBox'>
          <img className='reactLogo' src={logoReact} alt='react-Logo'></img>
        </div>
        {/* <span className='miniText'>
          by the way, you are currently scrolling a React app.
        </span> */}

        <motion.div
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: false, amount: 0.2 }}
          variants={titleAnimation}
        >
          <h1 className='hometitle'>What I can do.</h1>
        </motion.div>
        <h3 className='candosubTitle'>&gt;Design what you want.</h3>
        <div className='textDiv'>
          <p>
            I like to keep it simple. My goals are to focus on the content and
            conveying the message that you want to send.
          </p>
        </div>
        <h3 className='candosubTitle'>&gt;Develop what you need.</h3>
        <div className='textDiv'>
          <p>
            I'm a developer, so I know how to create your website to run across
            devices using the latest technologies available.
          </p>
        </div>
      </div>
      <div className='project'>
        <motion.div
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: false, amount: 0.2 }}
          variants={titleAnimation}
        >
          <h1 className='hometitle'>Projects.</h1>
        </motion.div>
        <Project />
      </div>
    </div>
  );
};

export default HomeContent;
