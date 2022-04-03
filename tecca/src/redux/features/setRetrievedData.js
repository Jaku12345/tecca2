import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoriesMap: {
    shirts: [],
    sweaters: [],
  },
  reviews: [],
};

const categoriesSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setShirtsData: function (state, action) {
      state.categoriesMap.shirts = action.payload;
    },
    setSweatersData: function (state, action) {
      state.categoriesMap.sweaters = action.payload;
    },
    setReviewsData: function (state, action) {
      state.reviews = action.payload;
    },
  },
});

export const { setShirtsData, setSweatersData, setReviewsData } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
