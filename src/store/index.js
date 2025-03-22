import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import authModalReducer from "./slices/authModalSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    authModal: authModalReducer,
  },
});

export default store;
