import React, { Component } from 'react';

import './App.css';
import './img/colach.jpg';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundry from '../ErrorBoundry';
import PeoplePage from '../PeoplePage';
import Swapi from '../../services/swapi';

export default class App extends Component {
  state = {};

  swapi = new Swapi();

  render() {
    return (
      <div className="container">
        <ErrorBoundry>
          <Header />
          <RandomPlanet />
          <PeoplePage />
        </ErrorBoundry>
      </div>
    );
  }
}
