import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: "large",
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar = state.sidebar === "large" ? "small" : "large";
    },
    setSidebar: (state, action) => {
      state.sidebar = action.payload;
    },
  },
});

export const { toggleSidebar, setSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
