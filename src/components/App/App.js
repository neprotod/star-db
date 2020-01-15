import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import './img/colach.jpg';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundry from '../ErrorBoundry';
import StarshipDedails from '../sw-components/StarshipDetail';
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
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets/:id?" component={PlanetPage} />
              <Route path="/starships" exact component={StarshipPage} />
              <Route
                path="/starships/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipDedails itemId={id} />;
                }}
              />
            </Router>
          </SwapiProvider>
        </ErrorBoundry>
      </div>
    );
  }
}
