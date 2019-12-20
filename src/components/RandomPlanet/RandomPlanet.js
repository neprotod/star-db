import React, { Component } from 'react';

import Swapi from '../../services/swapi';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import noImg from '../ErrorIndicator/img/Death-Star-icon_34500.png';

import './RandomPlanet.css';

export default class RandomPlanet extends Component{

  state = {
    planet: {},
    loading: true,
    error: false
  }

  swapi = new Swapi();

  componentDidMount(){
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  componentDidUnmount(){
    clearInterval(this.interval);
  }

  errorSet = ()=>{
    this.setState({
      loading: false,
      error: true
    });
  }

  updatePlanet = async() => {
    //const id = 20;

    const id = Math.floor(Math.random()*20) + 1;
    try{
      const planet = await this.swapi.getPlanet(id);

      this.setState({
        planet,
        loading: false
      });
    }catch(e){
      this.errorSet();
    }
  }

  
  render(){
    const { planet, loading, error } = this.state;

    const view = (loading && <Spinner />) || <PlanetView planet={planet} />;
    const content = !error ? view : <ErrorIndicator /> ;
    return (
      <div className="random-planet d-flex border-item">
          {content}
      </div>
    );
  }
};


class PlanetView extends Component {
  noImage = (e) => {
    e.target.src = noImg;
  }
  render(){
    const { id, name, population, rotationPeriod, diameter } = this.props.planet;

    return (
      <>
      <img className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        onError={this.noImage}
        alt={ name } />
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
            <span className="term">Diameter</span>
            <span>{ diameter }</span>
          </li>
        </ul>
      </div>
      </>
    );
  }
}