import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import authModalReducer from "./slices/authModalSlice";
import generatedCoverLetterReducer from "./slices/generatedCoverLetterSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    authModal: authModalReducer,
    coverLetter: generatedCoverLetterReducer,
  },
});

export default store;
