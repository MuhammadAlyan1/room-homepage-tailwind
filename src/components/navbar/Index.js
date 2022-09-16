import React, { useEffect } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './mobileNavbar/Index';
import { useDispatch, useSelector } from 'react-redux';
import { changeScreenSize } from '../../slices/navbarSlice';

const Navbar = () => {
  const { isOnMobileDevice } = useSelector((store) => store.navbar);
  const dispatch = useDispatch();

  useEffect(() => {
    const resizeEventListener = window.addEventListener('resize', (e) => {
      if (e.target.innerWidth >= 550) {
        dispatch(changeScreenSize(false));
      } else {
        dispatch(changeScreenSize(true));
      }
    });

    return () => window.removeEventListener('resize', resizeEventListener);
  }, []);

  if (isOnMobileDevice) {
    return <MobileNavbar />;
  }

  return <DesktopNavbar />;
};

export default Navbar;
