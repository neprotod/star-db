import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import starWarsLogo from './img/StarWars.png';

const Header = () => {
  return (
    <div id="header" className="d-flex border-item">
      <Link to="/" className="d-flex logo">
        <img
          className="star-wars-logo"
          alt="Logo Star Wars"
          src={starWarsLogo}
        />
        <span className="big-text">DB</span>
      </Link>
      <ul className="menu d-flex">
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/planets">Planets</Link>
        </li>
        <li>
          <Link to="/starships">Starships</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
