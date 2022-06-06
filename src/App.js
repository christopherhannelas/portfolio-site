import React from 'react';

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import LogoComponent from './components/logo/logo.component.jsx';
import Background from './components/background/background.component';

import AnimatedRoutes from './routes/animated-routes.jsx';

const App = () => {
  return (
    <div className='App'>
      <LogoComponent />
      <Background />

      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
};
export default App;
