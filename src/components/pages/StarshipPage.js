import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';

import { StarshipList } from '../sw-components';

const StarshipPage = ({ match, history }) => {
  const { path } = match;
  const itemList = (
    <ErrorBoundry>
      <StarshipList
        onItemSelect={itemId => {
          history.push(`${path}/${itemId}`);
        }}
      />
    </ErrorBoundry>
  );

  return <Row right={itemList} />;
};

StarshipPage.propTypes = {
  match: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
};

export default withRouter(StarshipPage);
