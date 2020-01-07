import React, { Component } from 'react';

import './App.css';
import './img/colach.jpg';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundry from '../ErrorBoundry';
import PeoplePage from '../PeoplePage';
import Swapi from '../../services/swapi';
import { SwapiProvider } from '../context/SwapiContext';

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
          </SwapiProvider>
        </ErrorBoundry>
      </div>
    );
  }
}
