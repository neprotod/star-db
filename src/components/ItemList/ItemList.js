/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ItemList.css';

const ItemList = props => {
  const {
    data: { itemList },
    onItemSelect,
    children,
  } = props;

  const items = itemList.map(items => {
    const { id } = items;
    const item = children(items);

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelect(id)}
        role="presentation"
      >
        {item}
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

export default ItemList;
