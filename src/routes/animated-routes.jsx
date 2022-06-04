import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/home/home.page.jsx';
import Contact from '../pages/contact/contact.page.jsx';
import About from '../pages/about/about.page.jsx';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
