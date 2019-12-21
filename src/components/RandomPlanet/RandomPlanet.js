import React, { Component } from 'react';

import Swapi from '../../services/swapi';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import PlanetView from '../PlanetView';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true,
    error: false,
  };

  swapi = new Swapi();

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  errorSet = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  updatePlanet = async () => {
    // const id = 20;

    const id = Math.floor(Math.random() * 20) + 1;
    try {
      const planet = await this.swapi.getPlanet(id);

      this.setState({
        planet,
        loading: false,
      });
    } catch (e) {
      this.errorSet();
    }
  };

  render() {
    const { planet, loading, error } = this.state;

    const view = (loading && <Spinner />) || <PlanetView planet={planet} />;
    const content = !error ? view : <ErrorIndicator />;
    return <div className="random-planet d-flex border-item">{content}</div>;
  }
}
