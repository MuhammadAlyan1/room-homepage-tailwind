import React, { useState } from 'react';
import ClosedNavbar from './ClosedNavbar';
import OpenedNavbar from './OpenedNavbar';
import { useSelector } from 'react-redux';

const MobileNavbar = () => {
  const { isNavbarOpened } = useSelector((store) => store.navbar);

  return (
    <div>
      <ClosedNavbar />
      {isNavbarOpened && <OpenedNavbar />}
    </div>
  );
};

export default MobileNavbar;
