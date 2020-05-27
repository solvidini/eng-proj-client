import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => {
  return (
    <li className="navigation__item">
      <NavLink
        className="navigation__item-link"
        to={props.link}
        exact={true}
        activeClassName="navigation__item-link--active"
        onClick={props.clicked}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
