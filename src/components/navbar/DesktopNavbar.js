import React from 'react';
import roomLogo from '../../assets/images/logo.svg';

const DesktopNavbar = () => {
  return (
    <nav className="absolute flex items-center gap-20 py-4 px-[5%]">
      <div className="cursor-pointer">
        <img src={roomLogo} alt="room logo" />
      </div>
      <div>
        <ul className="flex gap-6">
          <li className="navLink">Home</li>
          <li className="navLink">About</li>
          <li className="navLink">Contact</li>
          <li className="navLink">Blog</li>
          <li className="navLink">Careers</li>
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
