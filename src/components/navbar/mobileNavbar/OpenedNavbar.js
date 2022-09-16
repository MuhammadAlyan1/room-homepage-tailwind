import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { closeNavBar } from '../../../slices/navbarSlice';
import { useDispatch } from 'react-redux';

const OpenedNavbar = () => {
  const dispatch = useDispatch();

  const handleCloseNavbar = () => {
    // enable scroll when modal is closed
    document.body.style.overflow = 'unset';
    dispatch(closeNavBar());
  };

  return (
    <nav>
      <section className="absolute inset-0 z-10 bg-black/30">
        <section className="flex items-center gap-[1%] bg-white px-4 py-8">
          <div className="mx-2 flex items-center justify-around rounded-t-md bg-white ">
            <div
              className=" cursor-pointer text-2xl text-slate-400"
              onClick={handleCloseNavbar}
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="mx-2 w-full rounded-b-md bg-white">
            <ul className="flex items-center justify-between gap-3">
              <li className="navLink text-black">Home</li>
              <li className="navLink text-black">Shop</li>
              <li className="navLink text-black">About</li>
              <li className="navLink text-black">Contact</li>
            </ul>
          </div>
        </section>
      </section>
    </nav>
  );
};

export default OpenedNavbar;
