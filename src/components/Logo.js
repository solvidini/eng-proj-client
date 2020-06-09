import React from 'react';
import { NavLink } from 'react-router-dom';

import swpiuLogo from '../assets/images/swpiu-logo.png';

const Logo = (props) => {
  const logoClasses = ['logo'];
  if (props.hide) {
    logoClasses.push('logo--hide');
  }
  return (
    <NavLink
      className={logoClasses.join(' ')}
      to="/"
      exact={true}
      style={props.containerStyle}
    >
      <img
        className="logo__image"
        src={swpiuLogo}
        alt="SWPIU Logo"
        style={props.imageStyle}
      />
    </NavLink>
  );
};

export default Logo;
