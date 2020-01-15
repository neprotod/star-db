/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import './ItemList.css';

const ItemList = props => {
  const {
    data: { itemList },
    onItemSelect,
    children,
  } = props;

  const items = itemList.map(item => {
    const { id } = item;
    const elem = children(item);

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelect(id)}
        role="presentation"
      >
        {elem}
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

ItemList.defaultProps = {
  onItemSelect: () => {},
};

ItemList.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
  onItemSelect: PropTypes.func,
};

export default ItemList;
