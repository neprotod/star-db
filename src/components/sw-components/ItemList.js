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

const withChildFunction = (Wraper, fn) => {
  return props => <Wraper {...props}>{fn}</Wraper>;
};

const renderItem = ({ name }) => name;

const PersonList = withSwapi(
  withData(withChildFunction(ItemList, renderItem)),
  mapPersonMethodToProps,
);

const PlanetList = withSwapi(
  withData(withChildFunction(ItemList, renderItem)),
  mapPlanetsMethodToProps,
);

const StarshipList = withSwapi(
  withData(withChildFunction(ItemList, renderItem)),
  mapStarshipsMethodToProps,
);

export { PersonList, PlanetList, StarshipList };
