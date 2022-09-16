import React from 'react';
import { useDispatch } from 'react-redux';
import { goToNextFeature, goToPrevFeature } from '../../slices/featuresSlice';
import arrowLeft from '../../assets/images/icon-angle-left.svg';
import arrowRight from '../../assets/images/icon-angle-right.svg';

const NavigationButtons = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-fit bg-black ">
      <button
        className="p-4 transition duration-150 ease-in hover:bg-gray-700 md:p-7"
        onClick={() => dispatch(goToPrevFeature())}
      >
        <img src={arrowLeft} alt="arrowLeft" />
      </button>
      <button
        className="p-4 transition duration-150 ease-in hover:bg-gray-700 md:p-7"
        onClick={() => dispatch(goToNextFeature())}
      >
        <img src={arrowRight} alt="arrowRight" />
      </button>
    </div>
  );
};

export default NavigationButtons;
