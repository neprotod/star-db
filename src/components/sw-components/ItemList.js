/* eslint-disable react/display-name */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import ItemList from '../ItemList';
import withData from '../hoc/withData';

import withSwapi from '../hoc/withSwapi';

const mapPersonMethodToProps = swapi => {
  return {
    getData: swapi.getAllPeoples,
  };
};
const mapPlanetsMethodToProps = swapi => {
  return {
    getData: swapi.getAllPlanets,
  };
};
const mapStarshipsMethodToProps = swapi => {
  return {
    getData: swapi.getAllStarships,
  };
};

const withChildFunction = fn => Wraper => {
  return props => <Wraper {...props}>{fn}</Wraper>;
};

const renderItem = ({ name }) => name;

const PersonList = withSwapi(mapPersonMethodToProps)(
  withData(withChildFunction(renderItem)(ItemList)),
);

const PlanetList = withSwapi(mapPlanetsMethodToProps)(
  withData(withChildFunction(renderItem)(ItemList)),
);

const StarshipList = withSwapi(mapStarshipsMethodToProps)(
  withData(withChildFunction(renderItem)(ItemList)),
);

export { PersonList, PlanetList, StarshipList };
