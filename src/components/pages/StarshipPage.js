import React, { Component } from 'react';

import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';

import { StarshipList, StarshipDetail } from '../sw-components';

export default class StarshipPage extends Component {
  state = {
    selectedItem: 3,
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
        <StarshipList onItemSelect={this.onItemSelected} />
      </ErrorBoundry>
    );
    const itemDetails = (
      <ErrorBoundry>
        <StarshipDetail itemId={selectedItem} />
      </ErrorBoundry>
    );

    return <Row left={itemList} right={itemDetails} />;
  }
}
