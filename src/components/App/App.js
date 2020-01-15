import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import './img/colach.jpg';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundry from '../ErrorBoundry';
import Swapi from '../../services/swapi';
import { SwapiProvider } from '../context/SwapiContext';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <ErrorBoundry>
          <SwapiProvider value={new Swapi()}>
            <Router>
              <Header />
              <RandomPlanet />
              <Route
                path="/"
                exact
                component={() => {
                  return <h2>Hi! Welcom to StarDB</h2>;
                }}
              />
              <Route path="/people" component={PeoplePage} />
              <Route path="/planets" component={PlanetPage} />
              <Route path="/starships" component={StarshipPage} />
            </Router>
          </SwapiProvider>
        </ErrorBoundry>
      </div>
    );
  }
}
