import ItemList from '../ItemList';
import withData from '../hoc/withData';
import Swapi from '../../services/swapi';

const { getAllPeoples, getAllPlanets, getAllStarships } = new Swapi();

const PersonList = withData(ItemList, getAllPeoples);

const PlanetList = withData(ItemList, getAllPlanets);

const StarshipList = withData(ItemList, getAllStarships);

export { PersonList, PlanetList, StarshipList };
