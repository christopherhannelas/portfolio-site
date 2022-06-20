import React, { useEffect, useState } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Oval } from 'react-loader-spinner';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/autoscroll/autoscroll.component';
import Background from './components/background/background.component';
import AnimatedRoutes from './routes/animated-routes.jsx';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  });
  return (
    <div className='App'>
      <Background />

      <Router>
        <ScrollToTop />
        {isLoading ? (
          <div className='loading'>
            <Oval
              color='#2d8e67'
              secondaryColor='white'
              strokeWidth={5}
              strokeWidthSecondary={4}
              height={100}
              width={100}
            />
          </div>
        ) : (
          <AnimatedRoutes />
        )}
      </Router>
    </div>
  );
};
export default App;
