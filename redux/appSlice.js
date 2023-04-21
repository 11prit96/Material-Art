import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialRender: false,
  sidebar: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openSidebar: (state) => {
      return {
        ...state,
        sidebar: true,
      };
    },
    closeSidebar: (state) => {
      return {
        ...state,
        sidebar: false,
      };
    },
  },
});

export const { openSidebar, closeSidebar } = appSlice.actions;
export default appSlice.reducer;
