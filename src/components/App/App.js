import React, { Component } from 'react';

import './App.css';
import './img/colach.jpg';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundry from '../ErrorBoundry';
import Swapi from '../../services/swapi';
import { SwapiProvider } from '../context/SwapiContext';
import { PeoplePage, PlanetPage } from '../pages';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <ErrorBoundry>
          <SwapiProvider value={new Swapi()}>
            <Header />
            <RandomPlanet />
            <PeoplePage />
            <PlanetPage />
          </SwapiProvider>
        </ErrorBoundry>
      </div>
    );
  }
}
