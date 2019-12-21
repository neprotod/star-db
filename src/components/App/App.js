import React, { Component } from 'react';

import './App.css';
import './img/colach.jpg';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorIndicator from '../ErrorIndicator';
import PeoplePage from '../PeoplePage';

export default class App extends Component {
  state = {
    hasError: false
  }

  componentDidCatch(){
    console.log('componentDidCatch');
    this.setState({
      hasError: true
    });
  }

  render() {
    const { hasError } = this.state;

    if(hasError)
      return (
        <div className="border-item">
          <ErrorIndicator />
        </div>
      );

    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    );
  }
}
