// store/slices/templateSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: "A",
};

const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    setTemplate: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { setTemplate } = templateSlice.actions;
export default templateSlice.reducer;
