import React, { Component } from 'react';

import Swapi from '../../services/swapi';
import ErrorIndicator from '../ErrorIndicator';
import Spinner from '../Spinner';

import './ItemList.css';

class ItemList extends Component {
  state = {
    people: null,
    error: false
  };

  swapi = new Swapi();


  componentDidMount(){
    this.peopleList();
  }

  errorSet = ()=>{
    this.setState({
      error: true
    });
  }


  async peopleList(){
    try{
      const people = await this.swapi.getAllPeoples();

      this.setState({
        people
      });
    }catch(e){
      this.errorSet();
    }
  }

  onItemSelect = (id) =>{

  }

  renderItem(people){
    return people.map(({id, name})=>{
      return (
        <li className="list-group-item"
            key={id}
            onClick={() => this.props.onItemSelect(id)} >
          {name}
        </li>
      );
    });
  }

  render(){
    const { people, error } = this.state;
    if(!people)
      return <Spinner />

    const items = this.renderItem(people);
    return (
      <ul className="item-list list-group">
        {(!error && items) || <ErrorIndicator />}
      </ul>
    );
  }
};

export default ItemList;