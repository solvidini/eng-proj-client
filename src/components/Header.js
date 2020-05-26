import React from 'react';
import { NavLink } from 'react-router-dom';

import NavigationItems from './Navigation/NavigationItems';

const Header = (props) => {
  return (
    <div className="header">
      <NavLink className="header__logo" to="/" exact={true}>
        SWPIU
      </NavLink>
      <nav className="header__nav">
        <NavigationItems />
      </nav>
    </div>
  );
};

export default Header;
