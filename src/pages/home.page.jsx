import React from 'react';

import HomeContent from '../components/home-content/home-content.component';
import Footer from '../components/footer/footer.component';
import { motion } from 'framer-motion';

function Home() {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <HomeContent titleAnimation={titleAnimation} />
      <Footer titleAnimation={titleAnimation} />
    </motion.div>
  );
}

export default Home;
