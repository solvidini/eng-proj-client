import React from 'react';
import { NavLink } from 'react-router-dom';

import NavigationItems from './Navigation/NavigationItems';
import DrawerToggle from './Navigation/DrawerToggle';

const Header = (props) => {
  const headerClasses = ['header'];
  if (props.alteration) {
    headerClasses.push('header--alteration');
  }
  if (props.sideDrawerIsVisible) {
    headerClasses.push('header--transparent');
  }
  return (
    <header className={headerClasses.join(' ')} ref={props.headerRef}>
      <NavLink className="header__logo" to="/" exact={true}>
        SWPIU
      </NavLink>
      <DrawerToggle
        clicked={props.sideDrawerToggle}
        sideDrawerIsVisible={props.sideDrawerIsVisible}
      />
      <nav className="header__nav">
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Header;
