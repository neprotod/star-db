/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
import React from 'react';

import { SwapiConsumer } from '../context/SwapiContext';

const withSwapi = mapMethodsToProps => Wrapper => {
  return props => (
    <SwapiConsumer>
      {swapi => {
        const swapiProps = mapMethodsToProps(swapi);
        return <Wrapper {...props} {...swapiProps} />;
      }}
    </SwapiConsumer>
  );
};

export default withSwapi;
