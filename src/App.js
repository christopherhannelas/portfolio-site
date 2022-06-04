import React from 'react';

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import AnimatedRoutes from './routes/animated-routes.jsx';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
};
export default App;
