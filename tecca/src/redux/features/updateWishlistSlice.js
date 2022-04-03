import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isWishlistUpdated: false,
};

const updateWishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    updateWishlistItems: function (state, action) {
      state.isWishlistUpdated = !state.isWishlistUpdated;
    },
  },
});

export const { updateWishlistItems } = updateWishlistSlice.actions;

export default updateWishlistSlice.reducer;
