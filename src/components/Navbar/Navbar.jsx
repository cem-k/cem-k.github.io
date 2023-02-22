import React, { useState } from 'react';

import './Navbar.css';
import { images } from '../../constants';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">

      <div className="app__navbar-logo">
        <img id="logo-img" src={images.logo} alt="logo" />
      </div>

      <ul className="app__navbar-links">
        {['Home', 'About', 'Pricing', 'Contact'].map((item) => (
          <li id="link" className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a id="link-a" href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

    </nav>
  );
};

export default Navbar;
