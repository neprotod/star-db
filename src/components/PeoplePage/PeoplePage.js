import React, { Component } from 'react';

import ItemList from '../ItemList';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import Swapi from '../../services/swapi';

import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';
import withData from '../hoc/withData';

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
    const { getPersone, getPersonImage, getAllPeoples } = this.swapi;

    const WithData = withData(ItemList, getAllPeoples);

    const itemList = (
      <ErrorBoundry>
        <WithData
          onItemSelect={this.onPesrsonSelected}
          renderItem={({ name }) => name}
        />
      </ErrorBoundry>
    );

    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails
          itemId={selectedPerson}
          getData={getPersone}
          image={getPersonImage}
        >
          <Record field="gender" label="Gender" />
          <Record field="birthYear" label="Birth Year" />
          <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
      </ErrorBoundry>
    );

    return <Row left={itemList} right={itemDetails} />;
  }
}
