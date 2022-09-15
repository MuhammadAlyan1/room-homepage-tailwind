import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './slices/navbarSlice';
import featuresReducer from './slices/featuresSlice';

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    features: featuresReducer,
  },
});

export default store;
