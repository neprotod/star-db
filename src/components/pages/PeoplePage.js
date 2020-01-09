import React, { Component } from 'react';

import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';

import { PersonList, PersonDetail } from '../sw-components';

export default class PeoplePage extends Component {
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
        <PersonList onItemSelect={this.onItemSelected} />
      </ErrorBoundry>
    );
    const itemDetails = (
      <ErrorBoundry>
        <PersonDetail itemId={selectedItem} />
      </ErrorBoundry>
    );

    return <Row left={itemList} right={itemDetails} />;
  }
}
