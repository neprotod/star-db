import React, { Component } from 'react';

import './App.css';
import './img/colach.jpg';
import Header from '../Header';
import RandomPlanrt from '../RandomPlanrt';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanrt />
        <div className="d-flex content">
          <div className="left-column border-item">
            <ItemList />
          </div>
          <div className="right-column border-item">
            <PersonDetails />
          </div>
        </div>
      </div>
    );
  }
}
