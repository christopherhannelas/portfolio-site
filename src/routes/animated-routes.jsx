import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home.page.jsx';
import Contact from '../pages/contact.page.jsx';
import MyCode from '../pages/mycode.page.jsx';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/navbar/navbar.component.jsx';

function AnimatedRoutes() {
  return (
    <AnimatePresence>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/mycode' element={<MyCode />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
