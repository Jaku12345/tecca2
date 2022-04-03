import userSlice from "./features/userSlice";
import cartSlice from "./features/cartSlice";
import databaseItemsSlice from "./features/setRetrievedData";
import selectedProductPreviewSlice from "./features/selectedProductPreviewSlice";
import searchSlice from "./features/searchSlice";
import updateReviewsSlice from "./features/updateReviewsSlice";
import selectedCategoryPreviewSlice from "./features/selectedCategoryPreviewSlice";
import historyUrlSlice from "./features/historyUrlSlice";
import updateWishlistSlice from "./features/updateWishlistSlice";

const rootReducer = {
  user: userSlice,
  cart: cartSlice,
  databaseData: databaseItemsSlice,
  selectedProductPreview: selectedProductPreviewSlice,
  searchBar: searchSlice,
  updateReviews: updateReviewsSlice,
  selectedCategoryPreview: selectedCategoryPreviewSlice,
  historyUrlSlice,
  updateWishlistSlice,
};

export default rootReducer;
