import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import SideDrawer from '../components/Navigation/SideDrawer';
import Footer from '../components/Footer';

const Layout = (props) => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [headerAlteration, setHeaderAlteration] = useState(false);

  const yOffset = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', yOffset);

    return () => {
      window.removeEventListener('scroll', yOffset);
    };
  });

  useEffect(() => {
    if (scrollY > 70) {
      setHeaderAlteration(true);
    } else {
      setHeaderAlteration(false);
    }
  }, [setHeaderAlteration, scrollY]);

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };

  return (
    <>
      <Header
        sideDrawerToggle={sideDrawerToggleHandler}
        sideDrawerIsVisible={sideDrawerIsVisible}
        alteration={headerAlteration}
      />
      <SideDrawer
        opened={sideDrawerIsVisible}
        onClose={sideDrawerClosedHandler}
      />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
