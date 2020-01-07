/* eslint-disable react/display-name */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import ItemList from '../ItemList';
import withData from '../hoc/withData';
import Swapi from '../../services/swapi';

const { getAllPeoples, getAllPlanets, getAllStarships } = new Swapi();

const withChildFunction = (Wraper, fn) => {
  return props => <Wraper {...props}>{fn}</Wraper>;
};

const renderItem = ({ name }) => name;

const PersonList = withData(
  withChildFunction(ItemList, renderItem),
  getAllPeoples,
);

const PlanetList = withData(
  withChildFunction(ItemList, renderItem),
  getAllPlanets,
);

const StarshipList = withData(
  withChildFunction(ItemList, renderItem),
  getAllStarships,
);

export { PersonList, PlanetList, StarshipList };
