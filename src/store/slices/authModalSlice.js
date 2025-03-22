import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  mode: "login",
};

const authModalSlice = createSlice({
  name: "authModal",
  initialState,
  reducers: {
    openAuthModal: (state, action) => {
      state.isOpen = true;
      state.mode = action.payload;
    },
    closeAuthModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openAuthModal, closeAuthModal } = authModalSlice.actions;
export default authModalSlice.reducer;
