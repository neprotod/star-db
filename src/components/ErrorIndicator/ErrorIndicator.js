import React from 'react';

import './ErrorIndicator.css';
import star from './img/Death-Star-icon_34500.png';

const ErrorIndicator = () => {
  return (
    <div className="error_block">
      <img src={star} alt="Death Star" />
      <div className="big">Something wrong!!!</div>
      <div clasclassNames="small">Droids already go fix it</div>
    </div>
  );
};

export default ErrorIndicator;
