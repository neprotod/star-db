import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ left, right }) => {
  return (
    <div className="d-flex content">
      {left && <div className="left-column border-item">{left}</div>}
      {right && <div className="right-column border-item">{right}</div>}
    </div>
  );
};

Row.defaultProps = {
  left: null,
  right: null,
};
Row.propTypes = {
  left: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

export default Row;
