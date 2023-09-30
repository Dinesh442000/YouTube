import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    accountDetailsIsOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    showAccountDetails: (state) => {
      state.accountDetailsIsOpen = !state.accountDetailsIsOpen;
    },
    closeAccountDetails: (state) => {
      state.accountDetailsIsOpen = false;
    },
  },
});

export const {
  toggleMenu,
  closeMenu,
  showAccountDetails,
  closeAccountDetails,
} = appSlice.actions;
export default appSlice.reducer;
