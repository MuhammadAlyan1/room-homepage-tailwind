import { createSlice } from '@reduxjs/toolkit';

const MOBILE_SIZE = 450;
const isOnSmallScreen = window.innerWidth <= MOBILE_SIZE;

const initialState = {
  isNavbarOpened: false,
  isOnMobileDevice: isOnSmallScreen,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,

  reducers: {
    openNavbar: (state) => {
      state.isNavbarOpened = true;
    },

    closeNavBar: (state) => {
      state.isNavbarOpened = false;
    },

    changeScreenSize: (state, payload) => {
      state.isOnMobileDevice = payload.payload;
    },
  },
});

export const { openNavbar, closeNavBar, changeScreenSize } =
  navbarSlice.actions;

export default navbarSlice.reducer;
