import React from "react";

import "./wish-list.styles.scss";

import deleteIcon from "../../assets/delete.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeCartItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../redux/features/cartSlice";

import closeIcon from "../../assets/close-icon.svg";

import { updateWishlistItems } from "../../redux/features/updateWishlistSlice";

import { deleteWishListItem } from "../../utils/firebase.utils";

const WishlistItem = ({ cartItem }) => {
  let dispatch = useDispatch();

  const { id, name, imageUrlShowOff, price, sizes } = cartItem;

  const userState = useSelector((state) => {
    return state.user;
  });

  const { currentUser } = userState;

  const clearItemHandler = async () => {
    console.log("here");
    console.log(id, currentUser.uid);
    await deleteWishListItem(id, currentUser.uid);
    dispatch(updateWishlistItems());
  };

  return (
    <div className='wishlist-item-container'>
      <img
        className='wishlist-item-image'
        src={imageUrlShowOff}
        alt={`${name}`}
      />
      <div className='wishlist-details'>
        <span className='name'>{name}</span>
        <p> Select a size:</p>
        <span className='wishlist-sizes'>
          {sizes?.map((size, index) => {
            return (
              <p className='size' key={index}>
                {size}
              </p>
            );
          })}
        </span>
        <p>Add to bag</p>
      </div>
      <div className='wishlist-options'>
        <img
          onClick={clearItemHandler}
          className='delete'
          alt='delete-icon'
          src={closeIcon}></img>
        <p>{price}$</p>
      </div>
    </div>
  );
};

export default WishlistItem;
