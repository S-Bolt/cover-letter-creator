import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  font: "font-sans",
};

const generatedCoverLetterSlice = createSlice({
  name: "coverLetter",
  initialState,
  reducers: {
    setCoverLetter: (state, action) => {
      state.value = action.payload;
    },
    setFont: (state, action) => {
      state.value = action.payload;
    },
    clearCoverLetter: (state) => {
      state.value = "";
    },
  },
});

export const { setCoverLetter, clearCoverLetter, setFont } =
  generatedCoverLetterSlice.actions;
export default generatedCoverLetterSlice.reducer;
