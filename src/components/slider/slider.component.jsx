import React from 'react';
import { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

import './slider.styles.css';

export default function Slider() {
  return (
    <AnimateSharedLayout>
      <motion.ul className='ulist' layout initial={{ borderRadius: 25 }}>
        {/* project 1 */}
        <Content1 />
        {/* project 2 */}
        <Content2 />
        {/* project 3 */}
      </motion.ul>
    </AnimateSharedLayout>
  );
}

function Content1() {
  const [content1isOpen, setcontent1IsOpen] = useState(false);

  const toggleOpencontent1 = () => setcontent1IsOpen(!content1isOpen);
  return (
    <motion.li
      className='listedItem'
      layout
      onClick={toggleOpencontent1}
      initial={{ borderRadius: 10 }}
    >
      <motion.div className='avatar' layout />
      <h3>Online Shopping website</h3>
      <AnimatePresence>
        {content1isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className='row'>Online Shop</div>
            <div className='row'>details</div>
            <div className='row'>details</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

function Content2() {
  const [content2isOpen, setcontent2IsOpen] = useState(false);

  const toggleOpencontent2 = () => setcontent2IsOpen(!content2isOpen);
  return (
    <motion.li
      className='listedItem'
      layout
      onClick={toggleOpencontent2}
      initial={{ borderRadius: 10 }}
    >
      <motion.div className='avatar' layout />
      <h3>Online Shopping website</h3>
      <AnimatePresence>
        {content2isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className='row'>Online Shop</div>
            <div className='row'>details</div>
            <div className='row'>details</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
