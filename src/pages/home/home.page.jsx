import React from 'react';

import SvgComponent from '../../components/logo/logo.component';
import Navbar from '../../components/navbar/navbar.component';
import Background from '../../components/background/background.component';
import HomeContent from '../../components/home-content/home-content.component';

function Home() {
  return (
    <div>
      <Background />
      <SvgComponent />
      <Navbar />
      <HomeContent />
    </div>
  );
}

export default Home;
