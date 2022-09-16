import React from 'react';
import roomLogo from '../../../assets/images/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { openNavbar } from '../../../slices/navbarSlice';

const ClosedNavbar = ({ setIsNavbarOpened }) => {
  const dispatch = useDispatch();

  const handleOpenNavbar = () => {
    // disable scroll when modal is opened
    document.body.style.overflow = 'hidden';
    dispatch(openNavbar());
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-10 mx-8 mt-2 flex items-center gap-[35%] py-4">
      <div
        className="cursor-pointer text-3xl text-slate-200"
        onClick={handleOpenNavbar}
      >
        <GiHamburgerMenu />
      </div>
      <div className="cursor-pointer">
        <img src={roomLogo} alt="room logo" />
      </div>
    </nav>
  );
};

export default ClosedNavbar;
