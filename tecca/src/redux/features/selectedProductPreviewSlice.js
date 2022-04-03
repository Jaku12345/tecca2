import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPreviewItem: {
    id: "",
    name: "",
    price: "",
    sizes: [],
    imageUrlMain: "",
    imageUrlShowOff: "",
    additionalImage1: "",
    additionalImage2: "",
  },
  selectedPreviewItemReview: {
    title: "",
    review: "",
    categoryId: "",
    reviewId: 0,
  },
};

const selectedItemPreviewSlice = createSlice({
  name: "selectedItem",
  initialState,
  reducers: {
    updateSelectedItem: function (state, action) {
      state.selectedPreviewItem = action.payload;
    },
    setProductReview: function (state, action) {
      state.selectedPreviewItemReview.title = action.payload.title;
      state.selectedPreviewItemReview.review = action.payload.review;
      state.selectedPreviewItemReview.categoryId = action.payload.categoryId;
      state.selectedPreviewItemReview.reviewId =
        state.selectedPreviewItemReview.reviewId + 1;
    },
  },
});

export const { updateSelectedItem, setProductReview } =
  selectedItemPreviewSlice.actions;

export default selectedItemPreviewSlice.reducer;
