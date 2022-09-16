import React from 'react';
import iconArrow from '../../assets/images/icon-arrow.svg';
import Navbar from '../navbar/Index';
import { useSelector } from 'react-redux';
import NavigationButtons from './NavigationButtons';

const Features = () => {
  const { currentFeature } = useSelector((store) => store.features);
  const { isOnMobileDevice } = useSelector((store) => store.navbar);

  const { desktopImage, mobileImage, title, description } = currentFeature;

  return (
    <section className="bg-white lg:flex lg:items-center">
      <section className="relative lg:basis-1/2">
        <Navbar />
        <div className="w-full">
          <img
            className="block w-full"
            src={isOnMobileDevice ? mobileImage : desktopImage}
            alt={title}
          />
          <div className="absolute bottom-0 right-0">
            <NavigationButtons />
          </div>
        </div>
      </section>
      <section className="p-8 lg:basis-1/2 lg:py-0 lg:px-[7%]">
        <h1 className=" text-heading leading-10 lg:font-bold">{title}</h1>
        <p className="mt-4 text-lg text-slate-500 lg:text-xl">{description}</p>
        <div className="my-4 flex w-fit cursor-pointer items-center gap-4 text-lg font-bold transition duration-150 ease-in hover:text-slate-400">
          <p className="tracking-[8px]">SHOP NOW</p>
          <img className="-mt-1" src={iconArrow} alt="iconArrow" />
        </div>
      </section>
    </section>
  );
};

export default Features;
