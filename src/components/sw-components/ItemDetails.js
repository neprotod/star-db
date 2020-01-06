/* eslint-disable react/prop-types */
import React from 'react';

import Swapi from '../../services/swapi';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';

const {
  getPersone,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage,
} = new Swapi();

const PersonDetail = ({ itemId }) => {
  return (
    <ItemDetails itemId={itemId} getData={getPersone} image={getPersonImage}>
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

const PlanetDetail = ({ itemId }) => {
  return (
    <ItemDetails itemId={itemId} getData={getPlanet} image={getPlanetImage}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const StarshipDetail = ({ itemId }) => {
  return (
    <ItemDetails itemId={itemId} getData={getStarship} image={getStarshipImage}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

export { PersonDetail, PlanetDetail, StarshipDetail };
