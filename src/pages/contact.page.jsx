import React from 'react';

import { motion } from 'framer-motion';
import ContactContent from '../components/contact-content/contact-content-component';

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <ContactContent />
    </motion.div>
  );
}

export default Contact;
