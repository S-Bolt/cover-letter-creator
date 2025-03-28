import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    updateHeaderField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetHeader: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { updateHeaderField, resetHeader } = headerSlice.actions;
export default headerSlice.reducer;
