import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobTitle: "",
  companyName: "",
  jobDescription: "",
  remote: null,
  skills: ["", "", ""],
  traits: [],
  yearsExperience: 0,
  rightFit: "",
  companyContributions: "",
  useEducation: null,
  education: "",
  school: "",
  major: "",
  collegeExperience: "",
  tone: "",
  phoneNumber: "",
  firstName: "",
  lastName: "",
  email: "",
};

const coverLetterFormSlice = createSlice({
  name: "coverLetterForm",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    updateSkills: (state, action) => {
      const { index, value } = action.payload;
      state.skills[index] = value;
    },
    toggleTrait: (state, action) => {
      const trait = action.payload;
      if (state.traits.includes(trait)) {
        state.traits = state.traits.filter((t) => t !== trait);
      } else {
        if (state.traits.length < 3) {
          state.traits.push(trait);
        }
      }
    },
    resetForm: () => initialState,
  },
});

export const { updateField, updateSkills, toggleTrait, resetForm } =
  coverLetterFormSlice.actions;
export default coverLetterFormSlice.reducer;
