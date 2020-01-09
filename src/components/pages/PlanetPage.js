import React, { Component } from 'react';

import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';

import { PlanetList, PlanetDetail } from '../sw-components';

export default class PlanetPage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = id => {
    this.setState({
      selectedItem: id,
    });
  };

  render() {
    const { selectedItem } = this.state;

    const itemList = (
      <ErrorBoundry>
        <PlanetList onItemSelect={this.onItemSelected} />
      </ErrorBoundry>
    );
    const itemDetails = (
      <ErrorBoundry>
        <PlanetDetail itemId={selectedItem} />
      </ErrorBoundry>
    );

    return <Row left={itemList} right={itemDetails} />;
  }
}
