import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  primaryColor: "#000000",
  secondaryColor: "#ffffff",
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },
    setSecondaryColor: (state, action) => {
      state.secondaryColor = action.payload;
    },
  },
});

export const { setPrimaryColor, setSecondaryColor } = colorSlice.actions;
export default colorSlice.reducer;
