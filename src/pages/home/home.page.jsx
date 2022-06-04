import React from 'react';
import Navbar from '../../components/navbar/navbar.component';
import Background from '../../components/background/background.component';

import SvgComponent from '../../components/logo/logo.component';
import HomeContent from '../../components/home-content/home-content.component';

import { motion } from 'framer-motion';

function Home() {
  const home = true;
  const contact = false;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Background />
      <SvgComponent />
      <Navbar home={home} contact={contact} />
      <HomeContent />
    </motion.div>
  );
}

export default Home;
