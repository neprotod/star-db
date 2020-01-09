/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
import React from 'react';

const withChildFunction = fn => Wraper => {
  return props => <Wraper {...props}>{fn}</Wraper>;
};

export default withChildFunction;
