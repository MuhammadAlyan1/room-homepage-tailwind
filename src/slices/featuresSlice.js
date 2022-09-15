import { createSlice } from '@reduxjs/toolkit';

import desktopHero1 from '../assets/images/desktop-image-hero-1.jpg';
import desktopHero2 from '../assets/images/desktop-image-hero-2.jpg';
import desktopHero3 from '../assets/images/desktop-image-hero-3.jpg';
import mobileHero1 from '../assets/images/mobile-image-hero-1.jpg';
import mobileHero2 from '../assets/images/mobile-image-hero-2.jpg';
import mobileHero3 from '../assets/images/mobile-image-hero-3.jpg';

export const data = [
  {
    desktopImage: desktopHero1,
    mobileImage: mobileHero1,
    title: 'Discover innovative ways to decorate',
    description:
      'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
  },
  {
    desktopImage: desktopHero2,
    mobileImage: mobileHero2,
    title: 'We are available all across the globe',
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    desktopImage: desktopHero3,
    mobileImage: mobileHero3,
    title: 'Manufactured with the best materials',
    description:
      'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
  },
];

const initialState = {
  data,
  currentIndex: 0,
  currentFeature: data[0],
};

const featuresSlice = createSlice({
  name: 'features',
  initialState,

  reducers: {
    goToNextFeature: (state) => {
      if (state.currentIndex >= state.data.length - 1) return;

      state.currentIndex = state.currentIndex + 1;
      state.currentFeature = state.data[state.currentIndex];
    },

    goToPrevFeature: (state) => {
      if (state.currentIndex === 0) return;

      state.currentIndex = state.currentIndex - 1;
      state.currentFeature = state.data[state.currentIndex];
    },
  },
});

export const { goToNextFeature, goToPrevFeature } = featuresSlice.actions;
export default featuresSlice.reducer;
