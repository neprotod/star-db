import React, { Component } from 'react';

import Swapi from '../../services/swapi';
import ErrorIndicator from '../ErrorIndicator';
import Spinner from '../Spinner';

import './PersonDetails.css';

export default class PersonDetails extends Component {

  state = {
    person: null,
    loaded: true,
    error: false
  };

  swapi = new Swapi();

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.setState({
        loaded: true
      });
      this.updatePerson();
    }
  }

  errorSet = ()=>{
    this.setState({
      error: true,
      loaded: false
    });
  }
  async updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    try{
      const person = await this.swapi.getPersone(personId);

      this.setState({ 
        person,
        loaded: false
      });
    }catch(e){
      this.errorSet();
    }

  }

  render(){
    const { person, loaded, error } = this.state;
    if (!this.state.person) {
      return <span>Select a person from a list</span>;
    }

    if(loaded){
      return <Spinner />;
    }

    const content = loaded 
      ? <Spinner /> 
      : (!error && <ViewPeson person={person} />) || <ErrorIndicator />;

    return (
      <div className="person-details card">
        {content}
      </div>
    );
  }
};

const ViewPeson = ({person}) => {
  const { id, name, gender,
    birthYear, eyeColor } = person;

  return (
    <>
      <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${ id }.jpg`}
          alt={name} />
      <div className="card-body">
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{ gender }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{ birthYear }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{ eyeColor }</span>
          </li>
        </ul>
      </div>
    </>
  );
}