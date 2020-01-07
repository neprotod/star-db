import React from 'react';
import PropTypes from 'prop-types';

import ItemDetails, { Record } from '../ItemDetails/ItemDetails';

import withSwapi from '../hoc/withSwapi';

const StarshipDetail = ({ itemId, swapi }) => {
  const { getStarship, getStarshipImage } = swapi;
  return (
    <ItemDetails itemId={itemId} getData={getStarship} image={getStarshipImage}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

StarshipDetail.propTypes = {
  itemId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  swapi: PropTypes.shape({
    getStarship: PropTypes.func(),
    getStarshipImage: PropTypes.func(),
  }).isRequired,
};

export default withSwapi(StarshipDetail);
