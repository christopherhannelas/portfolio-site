import React from 'react';
import { motion } from 'framer-motion';
import CodeContent from '../components/code-content/code-content.component';

function MyCode() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <CodeContent />
    </motion.div>
  );
}

export default MyCode;
