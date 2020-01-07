/* eslint-disable react/prop-types */
import React from 'react';

import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import { SwapiConsumer } from '../context/SwapiContext';

const PersonDetail = ({ itemId }) => {
  return (
    <SwapiConsumer>
      {({ getPersone, getPersonImage }) => (
        <ItemDetails
          itemId={itemId}
          getData={getPersone}
          image={getPersonImage}
        >
          <Record field="gender" label="Gender" />
          <Record field="birthYear" label="Birth Year" />
          <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
      )}
    </SwapiConsumer>
  );
};

const PlanetDetail = ({ itemId }) => {
  return (
    <SwapiConsumer>
      {({ getPlanet, getPlanetImage }) => (
        <ItemDetails itemId={itemId} getData={getPlanet} image={getPlanetImage}>
          <Record field="population" label="Population" />
          <Record field="rotationPeriod" label="Rotation Period" />
          <Record field="diameter" label="Diameter" />
        </ItemDetails>
      )}
    </SwapiConsumer>
  );
};

const StarshipDetail = ({ itemId }) => {
  return (
    <SwapiConsumer>
      {({ getStarship, getStarshipImage }) => (
        <ItemDetails
          itemId={itemId}
          getData={getStarship}
          image={getStarshipImage}
        >
          <Record field="model" label="Model" />
          <Record field="length" label="Length" />
          <Record field="costInCredits" label="Cost" />
        </ItemDetails>
      )}
    </SwapiConsumer>
  );
};

export { PersonDetail, PlanetDetail, StarshipDetail };
