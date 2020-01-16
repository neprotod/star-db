/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorIndicator from '../ErrorIndicator';
import Spinner from '../Spinner';
import { contentScroll } from '../../helpers/scroll';

const withData = View => {
  return class extends Component {
    static defaultProps = {
      onItemSelect: null,
    };

    static propTypes = {
      getData: PropTypes.func.isRequired,
      onItemSelect: PropTypes.func,
    };

    state = {
      itemList: null,
      error: false,
    };

    componentDidMount() {
      this.renderList();
      contentScroll();
    }

    componentDidUpdate() {
      contentScroll();
    }

    errorSet = () => {
      this.setState({
        error: true,
      });
    };

    async renderList() {
      const { getData } = this.props;
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
