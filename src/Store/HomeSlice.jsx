import { createSlice } from "@reduxjs/toolkit";

const HomeSlice = createSlice({
  name: "home",
  initialState: {
    showInbox: true,
    showSent: false,
    inboxCount: 0,
  },
  reducers: {
    setShowInbox(state, action) {
      state.showInbox = action.payload;
    },
    setShowSent(state, action) {
      state.showSent = action.payload;
    },
    setInboxCount(state, action) {
      state.inboxCount = action.payload;
    },
  },
});

export const HomeActions = HomeSlice.actions;
export default HomeSlice.reducer;
