import React, { useState } from 'react';

import OnlineShop from '../../assets/onlineShopProject.png';
import win95Theme from '../../assets/win95Theme.png';
import './project-shop.styles.css';

function Projectshop() {
  const project1 = {
    title: 'Online Shopping Site',
    tabName: 'Crown Shopping',
    image: '👑',
    preview: OnlineShop,
    description: 'test 1',
  };
  const project2 = {
    title: 'Windows95 Portfolio Site',
    tabName: 'Windows95 Web',
    image: '💾',
    preview: win95Theme,
    description: 'test 2',
  };
  const tabs = [project1, project2];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const [tab1selection, setTab1Selection] = useState('liDiv selected');
  const [tab2selection, setTab2Selection] = useState('liDiv');

  function tab1OnClickHandler() {
    return (
      setSelectedTab(tabs[0]),
      setTab1Selection('liDiv selected'),
      setTab2Selection('liDiv ')
    );
  }

  function tab2OnClickHandler() {
    return (
      setSelectedTab(tabs[1]),
      setTab2Selection('liDiv selected'),
      setTab1Selection('liDiv')
    );
  }
  return (
    <div className='window'>
      <div className='tabBar'>
        <div className='ulDiv'>
          <div className={tab1selection} onClick={() => tab1OnClickHandler()}>
            {`${project1.image} ${project1.tabName}`}
          </div>
          <div className={tab2selection} onClick={() => tab2OnClickHandler()}>
            {`${project2.image} ${project2.tabName}`}
          </div>
        </div>
      </div>
      <div className='mainDiv'>
        <div key={selectedTab ? selectedTab.title : 'empty'}>
          <img
            className='imagClass'
            src={`${selectedTab.preview}`}
            alt='this is an ime'
          ></img>
          <div className='description'>
            <p>test{selectedTab ? selectedTab.description : '😋'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectshop;
