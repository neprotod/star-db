import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ left, right }) => {
  return (
    <div className="d-flex content">
      <div className="left-column border-item">{left}</div>
      <div className="right-column border-item">{right}</div>
    </div>
  );
};

Row.propTypes = {
  left: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  right: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default Row;
