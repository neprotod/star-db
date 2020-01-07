import React from 'react';
import PropTypes from 'prop-types';

import ItemDetails, { Record } from '../ItemDetails/ItemDetails';

import withSwapi from '../hoc/withSwapi';

const PlanetDetail = ({ itemId, swapi }) => {
  const { getPlanet, getPlanetImage } = swapi;
  return (
    <ItemDetails itemId={itemId} getData={getPlanet} image={getPlanetImage}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

PlanetDetail.propTypes = {
  itemId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  swapi: PropTypes.shape({
    getPlanet: PropTypes.func(),
    getPlanetImage: PropTypes.func(),
  }).isRequired,
};

export default withSwapi(PlanetDetail);
