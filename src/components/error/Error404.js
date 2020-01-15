import React from 'react';

import star from '../ErrorIndicator/img/Death-Star-icon_34500.png';
import './error.css';

const Error404 = () => {
  return (
    <div className="error-404">
      <img src={star} alt="Death Star" />
      <div className="message">
        <h1>No Found</h1>
        <div className="description">Try another page</div>
      </div>
    </div>
  );
};

export default Error404;
