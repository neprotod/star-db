import React, { Component } from 'react';

import Swapi from '../../services/swapi';

import './RandomPlanrt.css';

export default class RandomPlanrt extends Component{
  

  state = {
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  }

  swapi = new Swapi();


  async updatePlanet(){
    const planet = this.swapi.getPlanet(7);

    this.setState({
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    });
  }

  render(){
    const { name, population, rotationPeriod, diameter } = this.state;
    return (
      <div class="random-planet d-flex border-item">
        <img className="planet-image"
              src="https://starwars-visualguide.com/assets/img/planets/5.jpg" />
        <div>
            <h4>{ name }</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="term">Population</span>
                <span>{ population }</span>
              </li>
              <li className="list-group-item">
                <span className="term">Rotation Period</span>
                <span>{ rotationPeriod }</span>
              </li>
              <li className="list-group-item">
                <span className="term">{ diameter }</span>
                <span>100</span>
              </li>
            </ul>
          </div>
      </div>
    );
  }
};