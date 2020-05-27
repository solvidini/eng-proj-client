import React from 'react';

import NavigationItems from './NavigationItems';
import Backdrop from '../UI/Backdrop';

const SideDrawer = (props) => {
  let sideDrawerClasses = ['side-drawer', 'side-drawer--closed'];
  if (props.opened) {
    sideDrawerClasses = ['side-drawer', 'side-drawer--opened'];
  }
  return (
    <>
      <Backdrop show={props.opened} clicked={props.onClose} />
      <div
        className={sideDrawerClasses.join(' ')}
        onClick={props.closed}
      >
        <nav className="side-drawer__nav">
          <NavigationItems
            clicked={props.onClose}
          />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
