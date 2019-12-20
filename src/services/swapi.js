export default class Swapi{
  _apiUrl = 'https://swapi.co/api/';

  async getResourse(url = ''){
    const res = await fetch(this._apiUrl + url);
    
    if(!res.ok){
      throw new Error(`Could not fetch ${url}`);
    }

    return await res.json();
  }

  async getAllPeoples(){
    const res = await this.getResourse(`people`);
    return res.results;
  }
  
  async getAllPlanets(){
    const res = await this.getResourse(`planets`);
    return res.results;
  }

  async getAllFilms(){
    const res = await this.getResourse(`films`);
    return res.results;
  }

  async getAllStarships(){
    const res = await this.getResourse(`starships`);
    return res.results;
  }

  async getAllSpecies(){
    const res = await this.getResourse(`species`);
    return res.results;
  }

  async getAllVehicles(){
    const res = await this.getResourse(`vehicles`);
    return res.results;
  }

  async getPersone(id){
    const res = await this.getResourse(`people/${id}`);
    return res;
  }

  async getPlanet(id){
    const res = await this.getResourse(`planets/${id}`);
    return this._transformPlanet(res);
  }

  async getFilms(id){
    const res = await this.getResourse(`films/${id}`);
    return res;
  }

  async getStarship(id){
    const res = await this.getResourse(`starships/${id}`);
    return res;
  }

  async getVehicle(id){
    const res = await this.getResourse(`vehicles/${id}`);
    return res;
  }

  async getSpecies(id){
    const res = await this.getResourse(`species/${id}`);
    return res;
  }

  _extractId(item){
    const reqExt = /\/([0-9]*)\/$/;

    return item.url.match(reqExt)[1];
  }

  async _transformPlanet(planet){
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }
}