import React from 'react';

import { motion } from 'framer-motion';
import Navbar from '../components/navbar/navbar.component';
import Background from '../components/background/background.component';

function Contact() {
  const home = false;
  const contact = true;
  const about = false;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Background />
      <Navbar home={home} contact={contact} about={about} />
    </motion.div>
  );
}

export default Contact;
