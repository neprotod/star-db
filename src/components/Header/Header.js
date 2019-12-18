import React from 'react';

import './Header.css';
import starWarsLogo from './img/StarWars.png';

const Header = () => {
  return (
    <div id="header" className="d-flex border-item">
      <a href="/" className="d-flex logo">
        <img className="star-wars-logo" src={starWarsLogo} />
        <span class="big-text">DB</span>
      </a>
      <ul className="menu d-flex">
        <li>
          <a href="#">People</a>
        </li>
        <li>
          <a href="#">Planets</a>
        </li>
        <li>
          <a href="#">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;