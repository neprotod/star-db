import React from 'react';
import PropTypes from 'prop-types';

import ItemDetails, { Record } from '../ItemDetails/ItemDetails';

import withSwapi from '../hoc/withSwapi';

const PersonDetail = ({ itemId, getPersone, getPersonImage }) => {
  return (
    <ItemDetails itemId={itemId} getData={getPersone} image={getPersonImage}>
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapi => {
  const { getPersone, getPersonImage } = swapi;
  return {
    getPersone,
    getPersonImage,
  };
};

PersonDetail.propTypes = {
  itemId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  getPersone: PropTypes.func.isRequired,
  getPersonImage: PropTypes.func.isRequired,
};
PersonDetail.defaultProps = {
  itemId: null,
};

export default withSwapi(mapMethodsToProps)(PersonDetail);
