import React from 'react';
import { NavLink } from 'react-router-dom';

import swpiuLogo from '../assets/images/swpiu-logo.png';

const Logo = (props) => {
  const logoClasses = ['header__logo'];
  if (props.hide) {
    logoClasses.push('header__logo--hide');
  }
  return (
    <NavLink className={logoClasses.join(' ')} to="/" exact={true}>
      <img
        className="header__logo-image"
        src={swpiuLogo}
        alt="SWPIU Logo"
      />
    </NavLink>
  );
};

export default Logo;
