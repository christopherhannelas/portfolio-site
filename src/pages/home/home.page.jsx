import React from 'react';

import SvgComponent from '../../components/logo/logo.component';
import Navbar from '../../components/navbar/navbar.component';
import Background from '../../components/background/background.component';
import HomeContent from '../../components/home-content/home-content.component';

function Home() {
  const home = true;
  const contact = false;
  return (
    <div>
      <Background />
      <SvgComponent />
      <Navbar home={home} contact={contact} />
      <HomeContent />
    </div>
  );
}

export default Home;
