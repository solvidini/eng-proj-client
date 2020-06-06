import React from 'react';
import { NavLink } from 'react-router-dom';

import swpiuLogo from '../assets/images/swpiu-logo.png';

const Logo = (props) => {
  return (
    <NavLink className="header__logo" to="/" exact={true}>
      <img className="header__logo-image" src={swpiuLogo} alt="SWPIU Logo" />
    </NavLink>
  );
};

export default Logo;
