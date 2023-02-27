import React, { useState } from 'react';

import './Navbar.css';
import { images } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = () => {

  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const handleClick = (event) => {
    setHamburgerClicked(!hamburgerClicked)
  }
  const handleClose = (event) => {
    setHamburgerClicked(false)
  }


  return (
    <nav className="app__navbar">

      <div className='left_column'>
        <img id="logo-img" src={images.logo} alt="logo" />
      </div>

      <div className='middle_column'>
        <ul className="app__navbar-links">
          {['Home', 'About', 'Demo', 'Pricing', 'Contact'].map((item) => (
            <li key={`link-${item}`}>
              <div />
              <a id="link-a" href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="right_column">
        <button className="launchapp">
            Coming soon!
        </button>
        {/*
        <button className='signup'>Sign Up</button>
        <button className='launchapp'>Launch App</button>
          */}
      </div>

      <div className="hamburger" onClick={handleClick}>
        <button className="hamburger-btn">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>

      <div className={`sidebar ${hamburgerClicked ? "show" : ""}`}>
          <button onClick={handleClose}>
            <FontAwesomeIcon icon="fa-solid fa-xmark" size="3x"/>
          </button>
        <ul>
            {['Home', 'About', 'Demo', 'Pricing', 'Contact'].map((item) => (
              <li key={`link-${item}`}>
                <div />
                <a id='sidebar-links' href={`#${item}`}>{item}</a>
              </li>
            ))}
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
