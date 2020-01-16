/* eslint-disable */
export default class Swapi {
  _apiUrl = 'https://swapi.co/api/';
  _imgUrl = 'https://starwars-visualguide.com/assets/img/';

  getResourse = async (url = '') => {
    const res = await fetch(this._apiUrl + url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`);
    }
    const result = await res.json();
    return result;
  };

  getAllPeoples = async () => {
    const res = await this.getResourse(`people`);
    return res.results.map(item => this._transformPerson(item));
  };

  getAllPlanets = async () => {
    const res = await this.getResourse(`planets`);
    return res.results.map(item => this._transformPlanet(item));
  };

  getAllStarships = async () => {
    const res = await this.getResourse(`starships`);
    return res.results.map(item => this._transformStarship(item));
  };
  /*
  getAllFilms = async () => {
    const res = await this.getResourse(`films`);
    return res.results;
  };

  getAllSpecies = async () => {
    const res = await this.getResourse(`species`);
    return res.results;
  };

  getAllVehicles = async () => {
    const res = await this.getResourse(`vehicles`);
    return res.results.map(item => this._transformPlanet(item));
  };
  */
  getPersone = async id => {
    const res = await this.getResourse(`people/${id}`);
    return this._transformPerson(res);
  };

  getPlanet = async id => {
    const res = await this.getResourse(`planets/${id}`);
    return this._transformPlanet(res);
  };

  getStarship = async id => {
    const res = await this.getResourse(`starships/${id}`);
    return this._transformStarship(res);
  };
  /*
  getVehicle = async id => {
    const res = await this.getResourse(`vehicles/${id}`);
    return this._transformPerson(res);
  };

  getFilms = async id => {
    const res = await this.getResourse(`films/${id}`);
    return this._transformPerson(res);
  };

  getSpecies = async id => {
    const res = await this.getResourse(`species/${id}`);
    return this._transformPerson(res);
  };
  */
  getPlanetImage = id => {
    return `${this._imgUrl}planets/${id}.jpg`;
  };
  getPersonImage = id => {
    return `${this._imgUrl}characters/${id}.jpg`;
  };
  getStarshipImage = id => {
    return `${this._imgUrl}starships/${id}.jpg`;
  };

  _extractId(item) {
    const reqExt = /\/([0-9]*)\/$/;

    return item.url.match(reqExt)[1];
  }

  _transformPlanet = planet => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  _transformStarship = starship => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  };

  _transformPerson = person => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };
}
