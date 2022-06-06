import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar/navbar.component';
import Background from '../components/background/background.component';
import Profilepic from '../components/profilepic/profilepic.component';

function About() {
  const home = false;
  const contact = false;
  const about = true;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Background />

      <Navbar home={home} contact={contact} about={about} />
      <Profilepic />
    </motion.div>
  );
}

export default About;
