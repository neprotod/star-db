import React, { Component } from 'react';
import PropTypes from 'prop-types';

import noImg from '../ErrorIndicator/img/Death-Star-icon_34500.png';

export default class PlanetView extends Component {
  static propTypes = {
    planet: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      population: PropTypes.string,
      rotationPeriod: PropTypes.string,
      diameter: PropTypes.string,
    }).isRequired,
  };

  noImage = e => {
    e.target.src = noImg;
  };

  render() {
    const {
      planet: { id, name, population, rotationPeriod, diameter },
    } = this.props;

    return (
      <>
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          onError={this.noImage}
          alt={name}
        />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
