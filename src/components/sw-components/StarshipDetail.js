import React from 'react';
import PropTypes from 'prop-types';

import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import withSwapi from '../hoc/withSwapi';

const StarshipDetail = ({ itemId, getStarship, getStarshipImage }) => {
  return (
    <ItemDetails itemId={itemId} getData={getStarship} image={getStarshipImage}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapi => {
  const { getStarship, getStarshipImage } = swapi;
  return {
    getStarship,
    getStarshipImage,
  };
};

StarshipDetail.propTypes = {
  itemId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  getStarship: PropTypes.func.isRequired,
  getStarshipImage: PropTypes.func.isRequired,
};
StarshipDetail.defaultProps = {
  itemId: null,
};

export default withSwapi(mapMethodsToProps)(StarshipDetail);
