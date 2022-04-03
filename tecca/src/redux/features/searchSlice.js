import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  renderSearch: false,
  slideInAnimationDirection2: "slide-in-right",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setIsSearchOpen: function (state, action) {
      state.renderSearch = action.payload.displaySearch;
      state.slideInAnimationDirection2 = action.payload.slideSearchInFrom;
    },
  },
});

export const { setIsSearchOpen } = searchSlice.actions;

export default searchSlice.reducer;
