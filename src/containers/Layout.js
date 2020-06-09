import React, { useState, useEffect, useRef, useCallback } from 'react';

import Header from '../components/Header';
import SideDrawer from '../components/Navigation/SideDrawer';
import Footer from '../components/Footer';

const Layout = (props) => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [headerAlteration, setHeaderAlteration] = useState(false);
  const [minHeight, setMinHeight] = useState({});
  const headerRef = useRef(null);
  const footerRef = useRef(null);

  const yOffset = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', yOffset);
    window.addEventListener('resize', adjustFooter);

    return () => {
      window.removeEventListener('scroll', yOffset);
      window.removeEventListener('resize', adjustFooter);
    };
  });

  useEffect(() => {
    if (scrollY > 70) {
      setHeaderAlteration(true);
    } else {
      setHeaderAlteration(false);
    }
  }, [setHeaderAlteration, scrollY]);

  const adjustFooter = useCallback(() => {
    const footerHeight = footerRef.current.offsetHeight;
    const headerHeight = headerRef.current.offsetHeight;
    setMinHeight({
      minHeight:
        'calc(100vh - ' + (footerHeight + headerHeight) + 'px)',
    });
  }, [setMinHeight]);

  useEffect(() => {
    adjustFooter();
  }, [adjustFooter]);

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
        headerRef={headerRef}
      />
      <SideDrawer
        opened={sideDrawerIsVisible}
        onClose={sideDrawerClosedHandler}
      />
      <div className="content" style={minHeight}>{props.children}</div>
      <Footer footerRef={footerRef} />
    </>
  );
};

export default Layout;
