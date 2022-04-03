import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: {
    name: "",
  },
};

const selectedCategoryPreviewSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectedCategory: function (state, action) {
      state.category.name = action.payload;
    },
  },
});

export const { setSelectedCategory } = selectedCategoryPreviewSlice.actions;

export default selectedCategoryPreviewSlice.reducer;
