import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home.page.jsx';

import Contact from './pages/contact/contact.page.jsx';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
