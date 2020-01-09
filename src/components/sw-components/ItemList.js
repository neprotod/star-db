/* eslint-disable react/display-name */
/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line no-unused-vars
import React from 'react';

import ItemList from '../ItemList';
import withData from '../hoc/withData';
import withSwapi from '../hoc/withSwapi';
import withChildFunction from '../hoc/withChildFunction';
import compose from '../hoc/compose';

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

const renderItem = ({ name }) => name;

const PersonList = compose(
  withSwapi(mapPersonMethodToProps),
  withData,
  withChildFunction(renderItem),
)(ItemList);

const PlanetList = compose(
  withSwapi(mapPlanetsMethodToProps),
  withData,
  withChildFunction(renderItem),
)(ItemList);

const StarshipList = compose(
  withSwapi(mapStarshipsMethodToProps),
  withData,
  withChildFunction(renderItem),
)(ItemList);
export { PersonList, PlanetList, StarshipList };
