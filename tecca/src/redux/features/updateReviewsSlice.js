import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postedReview: {
    title: "",
    review: "",
    id: "",
  },
  postReview: false,
};

const updateReviewsSlice = createSlice({
  name: "UpdatReviews",
  initialState,
  reducers: {
    updateReviewsComponent: function (state, action) {
      state.postedReview.title = action.payload.title;
      state.postedReview.review = action.payload.review;
      state.postedReview.id = action.payload.categoryId;
    },
    updateReviewComponentAfterDeletePressed: function (state, action) {
      state.postReview = action.payload;
    },
  },
});

export const {
  updateReviewsComponent,
  updateReviewComponentAfterDeletePressed,
} = updateReviewsSlice.actions;

export default updateReviewsSlice.reducer;
