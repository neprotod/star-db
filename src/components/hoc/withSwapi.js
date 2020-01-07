/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
import React from 'react';

import { SwapiConsumer } from '../context/SwapiContext';

const withSwapi = Wrapper => {
  return props => (
    <SwapiConsumer>
      {swapi => <Wrapper {...props} swapi={swapi} />}
    </SwapiConsumer>
  );
};

export default withSwapi;
