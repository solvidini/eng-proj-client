import React from 'react';

import NavigationItem from './NavigationItem.js';

const NavigationItems = (props) => {
  return (
    <ul className="navigation">
      <NavigationItem exact link="/" clicked={props.clicked}>
        Home
      </NavigationItem>
      <NavigationItem link="/products" clicked={props.clicked}>
        Produkty
      </NavigationItem>
      <NavigationItem link="/services" clicked={props.clicked}>
        Usługi
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
