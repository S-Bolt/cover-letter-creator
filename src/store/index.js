import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import authModalReducer from "./slices/authModalSlice";
import generatedCoverLetterReducer from "./slices/generatedCoverLetterSlice";
import coverLetterFormReducer from "./slices/coverLetterFormSlice";
import templateReducer from "./slices/templateSlice";
import headerReducer from "./slices/headerSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    authModal: authModalReducer,
    coverLetter: generatedCoverLetterReducer,
    coverLetterForm: coverLetterFormReducer,
    template: templateReducer,
    header: headerReducer,
  },
});

export default store;
