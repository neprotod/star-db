import React from 'react';
import PropTypes from 'prop-types';

import ItemDetails, { Record } from '../ItemDetails/ItemDetails';

import withSwapi from '../hoc/withSwapi';

const PlanetDetail = ({ itemId, getPlanet, getPlanetImage }) => {
  return (
    <ItemDetails itemId={itemId} getData={getPlanet} image={getPlanetImage}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapi => {
  const { getPlanet, getPlanetImage } = swapi;
  return {
    getPlanet,
    getPlanetImage,
  };
};

PlanetDetail.propTypes = {
  itemId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  getPlanet: PropTypes.func.isRequired,
  getPlanetImage: PropTypes.func.isRequired,
};
PlanetDetail.defaultProps = {
  itemId: null,
};

export default withSwapi(PlanetDetail, mapMethodsToProps);
