import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';

import { PersonList, PersonDetail } from '../sw-components';

const PeoplePage = ({ match, history }) => {
  const { id } = match.params;

  const itemList = (
    <ErrorBoundry>
      <PersonList
        onItemSelect={idPage => {
          history.push(idPage);
        }}
      />
    </ErrorBoundry>
  );
  const itemDetails = (
    <ErrorBoundry>
      <PersonDetail itemId={id} />
    </ErrorBoundry>
  );

  return <Row left={itemList} right={itemDetails} />;
};

PeoplePage.propTypes = {
  match: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
};

export default withRouter(PeoplePage);
