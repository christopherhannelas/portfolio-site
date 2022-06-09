import React, { useState } from 'react';

import OnlineShop from '../../assets/onlineShopProject.png';
import win95Theme from '../../assets/win95Theme.png';
import win95logo from '../../assets/windows-95-Logo.png';
import crownLogo from '../../assets/crown.svg';
import gitLogo from '../../assets/github.png';
import websiteLogo from '../../assets/websiteLogo.png';

import './project.styles.css';

function Project() {
  const project1 = {
    title: 'Online Shopping Site',
    tabName: 'Crown Shopping',
    image: '👑',
    preview: OnlineShop,
    projectLogo: crownLogo,
    concept:
      "It's an online shopping store with a signup/login which allow a login with google account. It also have a cart management system from where you can add or remove selected items which will appear on the checkout page.",
    features: (
      <ul className='features'>
        <li>React</li>
        <li>React-Router-Dom</li>
        <li>Context hooks</li>
        <li>Styled-Components</li>
        <li>Firestore (data base & login system)</li>
      </ul>
    ),
    github: 'https://github.com/christopherhannelas/onlineshop',
    deployed: true,
    website: 'https://dazzling-gnome-fb256b.netlify.app/',
  };
  const project2 = {
    title: 'Windows95 Themed Based website',
    tabName: 'Windows95 Web',
    image: '💾',
    preview: win95Theme,
    projectLogo: win95logo,
    concept:
      "It's a portfolio website base on windows95 theme, it will be fully responsive, each window will be draggable individualy and all fonctionality will replicate the original.",
    features: (
      <ul className='features'>
        <li>React</li>
        <li>React-Router-Dom</li>
        <li>Heavy CSS work 😜</li>
      </ul>
    ),
    github: 'https://github.com/christopherhannelas/Portfolio-win95-React',
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
          <img
            className='addLogoProject'
            src={`${selectedTab.projectLogo}`}
            alt='this is an ime'
          ></img>
          <h2 className='tabTitle'>{selectedTab ? selectedTab.title : '😋'}</h2>
          <div className='description'>
            <ul className='descUl'>
              <li>
                <h4>
                  <u>Concept</u>:
                </h4>
              </li>
              <p>{selectedTab ? selectedTab.concept : '😋'}</p>

              <li>
                <h4>
                  <u>Features</u>:
                </h4>
              </li>
              {selectedTab ? selectedTab.features : '😋'}
              <li>
                <h4>
                  <u>Links</u>:
                </h4>
              </li>
              <a
                href={selectedTab ? selectedTab.github : '😋'}
                target='_blank'
                rel='noreferrer'
              >
                <img
                  className='linkLogo'
                  src={`${gitLogo}`}
                  alt='gitlogo'
                ></img>
              </a>

              {selectedTab.deployed && (
                <a
                  href={selectedTab ? selectedTab.website : '😋'}
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    className='linkLogo'
                    src={`${websiteLogo}`}
                    alt='gitlogo'
                  ></img>
                </a>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
