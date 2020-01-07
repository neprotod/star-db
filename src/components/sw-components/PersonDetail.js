import React from 'react';
import PropTypes from 'prop-types';

import ItemDetails, { Record } from '../ItemDetails/ItemDetails';

import withSwapi from '../hoc/withSwapi';

const PersonDetail = ({ itemId, swapi }) => {
  const { getPersone, getPersonImage } = swapi;

  return (
    <ItemDetails itemId={itemId} getData={getPersone} image={getPersonImage}>
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

PersonDetail.propTypes = {
  itemId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  swapi: PropTypes.shape({
    getPersone: PropTypes.func(),
    getPersonImage: PropTypes.func(),
  }).isRequired,
};

export default withSwapi(PersonDetail);
