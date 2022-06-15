import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home.page.jsx';
import Contact from '../pages/contact.page.jsx';
import MyCode from '../pages/mycode.page.jsx';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/mycode' element={<MyCode />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
