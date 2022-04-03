import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isCartOpen: false,
  slideInAnimationDirection: "slide-in-right",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: function (state, action) {
      const existingCartItem = state.cartItems?.find(
        (cartItem) =>
          cartItem.id === action.payload.id &&
          cartItem.size === action.payload.size
      );

      if (existingCartItem) {
        const updatedQuantity = state.cartItems.map((cartItem) => {
          if (
            cartItem.id === action.payload.id &&
            cartItem.size === action.payload.size
          ) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          } else {
            return cartItem;
          }
        });
        state.cartItems = updatedQuantity;
      } else {
        const result = { ...action.payload, quantity: 1 };
        state.cartItems = [...state.cartItems, result];
      }
    },
    removeCartItem: function (state, action) {
      const filteredItems = state.cartItems?.filter(
        (cartItem) =>
          cartItem.id !== action.payload.id ||
          cartItem.size !== action.payload.size
      );

      state.cartItems = filteredItems;
    },
    decreaseItemQuantity: function (state, action) {
      const filteredItems = state.cartItems?.map((cartItem) => {
        if (
          cartItem.id === action.payload.id &&
          cartItem.size === action.payload.size
        ) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
          return cartItem;
        }
      });

      const negativeCartItemQuantity = filteredItems.find((cartItem) => {
        if (cartItem.quantity === 0) {
          return true;
        } else {
          return false;
        }
      });

      if (negativeCartItemQuantity) {
        const cartItemWithRemovedNegative = filteredItems.filter(
          (cartItem) =>
            cartItem.size !== action.payload.size ||
            cartItem.id !== action.payload.id
        );
        state.cartItems = cartItemWithRemovedNegative;
      } else {
        state.cartItems = filteredItems;
      }
    },
    increaseItemQuantity: function (state, action) {
      const filteredItems = state.cartItems?.map((cartItem) => {
        if (
          cartItem.id === action.payload.id &&
          cartItem.size === action.payload.size
        ) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      });
      state.cartItems = filteredItems;
    },
    setIsCartOpen: function (state, action) {
      state.isCartOpen = action.payload.displayCart;
      state.slideInAnimationDirection = action.payload.slideCartInFrom;
    },
  },
});

export const {
  addItemToCart,
  removeCartItem,
  decreaseItemQuantity,
  increaseItemQuantity,
  setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
