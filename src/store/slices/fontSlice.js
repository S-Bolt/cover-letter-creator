import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFontStyle: "sans-serif",
};

export const fontSlice = createSlice({
  name: "font",
  initialState,
  reducers: {
    setSelectedFontStyle: (state, action) => {
      state.selectedFontStyle = action.payload;
    },
  },
});

export const { setSelectedFontStyle } = fontSlice.actions;
export default fontSlice.reducer;
