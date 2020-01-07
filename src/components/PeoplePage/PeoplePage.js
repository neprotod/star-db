import React, { Component } from 'react';

import Swapi from '../../services/swapi';

import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';

import { PersonList, PersonDetail } from '../sw-components';

export default class PeoplePage extends Component {
  swapi = new Swapi();

  state = {
    selectedPerson: 3,
  };

  onPesrsonSelected = id => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    const { selectedPerson } = this.state;

    const itemList = (
      <ErrorBoundry>
        <PersonList onItemSelect={this.onPesrsonSelected} />
      </ErrorBoundry>
    );
    const itemDetails = (
      <ErrorBoundry>
        <PersonDetail itemId={selectedPerson} />
      </ErrorBoundry>
    );

    return <Row left={itemList} right={itemDetails} />;
  }
}
