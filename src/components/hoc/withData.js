/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorIndicator from '../ErrorIndicator';
import Spinner from '../Spinner';

const withData = (View, getData) => {
  return class extends Component {
    static propTypes = {
      onItemSelect: PropTypes.func.isRequired,
      renderItem: PropTypes.func.isRequired,
    };

    state = {
      itemList: null,
      error: false,
    };

    componentDidMount() {
      this.renderList();
    }

    errorSet = () => {
      this.setState({
        error: true,
      });
    };

    async renderList() {
      try {
        const itemList = await getData();

        this.setState({
          itemList,
        });
      } catch (e) {
        this.errorSet();
      }
    }

    render() {
      const { itemList, error } = this.state;
      if (!itemList) return <Spinner />;
      if (error) return <ErrorIndicator />;

      return <View {...this.props} data={this.state} />;
    }
  };
};

export default withData;
