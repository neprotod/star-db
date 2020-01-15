import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';

import { PlanetList, PlanetDetail } from '../sw-components';

const PlanetPage = ({ match, history }) => {
  const { id } = match.params;

  const itemList = (
    <ErrorBoundry>
      <PlanetList
        onItemSelect={idPage => {
          history.push(idPage);
        }}
      />
    </ErrorBoundry>
  );

  const itemDetails = (
    <ErrorBoundry>
      <PlanetDetail itemId={id} />
    </ErrorBoundry>
  );

  return <Row left={itemList} right={itemDetails} />;
};

PlanetPage.propTypes = {
  match: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
};

export default withRouter(PlanetPage);
