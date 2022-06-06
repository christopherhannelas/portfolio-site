import React from 'react';
import Navbar from '../components/navbar/navbar.component';

import HomeContent from '../components/home-content/home-content.component';
import Footer from '../components/footer/footer.component';
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
      <Navbar home={home} contact={contact} />
      <HomeContent />
      <Footer />
    </motion.div>
  );
}

export default Home;
