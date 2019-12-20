import React, { Component } from 'react';

import './App.css';
import './img/colach.jpg';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ErrorIndicator from '../ErrorIndicator';

export default class App extends Component {
  state = {
    selectedPerson: 3,
    hasError: false
  }

  componentDidCatch(){
    console.log('componentDidCatch');
    this.setState({
      hasError: true
    });
  }

  onPesrsonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  }

  render() {
    const { selectedPerson, hasError } = this.state;

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
        <div className="d-flex content">
          <div className="left-column border-item">
            <ItemList onItemSelect={this.onPesrsonSelected} />
          </div>
          <div className="right-column border-item">
            <PersonDetails personId={selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
