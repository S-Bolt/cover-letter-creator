import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const generatedCoverLetterSlice = createSlice({
  name: "coverLetter",
  initialState,
  reducers: {
    setCoverLetter: (state, action) => {
      state.value = action.payload;
    },
    clearCoverLetter: (state) => {
      state.value = "";
    },
  },
});

export const { setCoverLetter, clearCoverLetter } =
  generatedCoverLetterSlice.actions;
export default generatedCoverLetterSlice.reducer;
