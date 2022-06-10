import React from 'react';

import { motion } from 'framer-motion';
import ContactContent from '../components/contact-content/contact-content-component';

function Contact() {
  const contactTitleAnimation = {
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
      <ContactContent contactTitleAnimation={contactTitleAnimation} />
    </motion.div>
  );
}

export default Contact;
