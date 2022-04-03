import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
};

const historyUrlSlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addUrlToHistory: function (state, action) {
      if (state.history.length > 5) {
        state.history = state.history.slice(
          Math.max(state.history.length - 4, 0)
        );
      }
      state.history = [...state.history, action.payload];
    },
  },
});

export const { addUrlToHistory } = historyUrlSlice.actions;

export default historyUrlSlice.reducer;
