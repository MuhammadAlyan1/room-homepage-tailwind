import React from 'react';
import furnitureDarkImage from '../assets/images/image-about-dark.jpg';
import furnitureLightkImage from '../assets/images/image-about-light.jpg';

const FurnitureDetails = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:items-center">
      <div className="lg:basis-1/4">
        <img className="w-full" src={furnitureDarkImage} alt="furniture" />
      </div>
      <article className="p-8 lg:basis-2/4">
        <h1 className="mb-4 text-xl font-bold uppercase tracking-[5px] md:text-2xl">
          About our furniture
        </h1>
        <p className="text-slate-500 md:text-xl">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </article>
      <div className="lg:basis-1/4">
        <img className="w-full" src={furnitureLightkImage} alt="furniture" />
      </div>
    </section>
  );
};

export default FurnitureDetails;
