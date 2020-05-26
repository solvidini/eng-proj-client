import React from 'react';

import NavigationItem from './NavigationItem.js';

const NavigationItems = (props) => {
  return (
    <ul className="navigation">
      <NavigationItem link="/">Home</NavigationItem>
      <NavigationItem link="/products">Produkty</NavigationItem>
      <NavigationItem link="/services">Usługi</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
