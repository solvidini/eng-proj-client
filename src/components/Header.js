import React from 'react';

import NavigationItems from './Navigation/NavigationItems';
import DrawerToggle from './Navigation/DrawerToggle';
import Logo from './Logo';

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
      <Logo />
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
