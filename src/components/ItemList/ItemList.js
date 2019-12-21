import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Swapi from '../../services/swapi';
import ErrorIndicator from '../ErrorIndicator';
import Spinner from '../Spinner';

import './ItemList.css';

class ItemList extends Component {
  static propTypes = {
    onItemSelect: PropTypes.func.isRequired,
  };

  state = {
    people: null,
    error: false,
  };

  swapi = new Swapi();

  componentDidMount() {
    this.peopleList();
  }

  errorSet = () => {
    this.setState({
      error: true,
    });
  };

  async peopleList() {
    try {
      const people = await this.swapi.getAllPeoples();

      this.setState({
        people,
      });
    } catch (e) {
      this.errorSet();
    }
  }

  renderItem(people) {
    const { onItemSelect } = this.props;

    return people.map(({ id, name }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => onItemSelect(id)}
          role="presentation"
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { people, error } = this.state;
    if (!people) return <Spinner />;

    const items = this.renderItem(people);
    return (
      <ul className="item-list list-group">
        {(!error && items) || <ErrorIndicator />}
      </ul>
    );
  }
}

export default ItemList;
