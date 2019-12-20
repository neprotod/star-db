import React from 'react';

import './ErrorIndicator.css'
import star from './img/Death-Star-icon_34500.png'

const ErrorIndicator = () => {
  return (
    <div class="error_block">
      <img src={star} alt="Death Star" />
      <div class="big">Something wrong!!!</div>
      <div class="small">Droids already go fix it</div>
    </div>
  );
};

export default ErrorIndicator;