import React from 'react';

import NavigationItems from './Navigation/NavigationItems';

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__logo">SWPIU</div>
      <nav className="header__nav">
        <NavigationItems />
      </nav>
    </div>
  );
};

export default Header;
