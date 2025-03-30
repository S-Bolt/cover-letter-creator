import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import authModalReducer from "./slices/authModalSlice";
import generatedCoverLetterReducer from "./slices/generatedCoverLetterSlice";
import coverLetterFormReducer from "./slices/coverLetterFormSlice";
import templateReducer from "./slices/templateSlice";
import headerReducer from "./slices/headerSlice";
import colorReducer from "./slices/colorSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    authModal: authModalReducer,
    coverLetter: generatedCoverLetterReducer,
    coverLetterForm: coverLetterFormReducer,
    template: templateReducer,
    header: headerReducer,
    color: colorReducer,
  },
});

export default store;
