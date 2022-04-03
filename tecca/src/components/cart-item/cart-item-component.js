import React from "react";

import "./cart-item-component.styles.scss";

import deleteIcon from "../../assets/delete.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeCartItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../redux/features/cartSlice";

const CartItem = ({ cartItem }) => {
  let dispatch = useDispatch();

  const { id, name, imageurlshowoff, price, quantity, size } = cartItem;

  const clearItemHandler = () => dispatch(removeCartItem(cartItem));
  const removeItemHandler = () => dispatch(decreaseItemQuantity({ size, id }));
  const increaseItemHandler = () =>
    dispatch(increaseItemQuantity({ size, id }));

  return (
    <div className='cart-item-container'>
      <img className='cart-item-image' src={imageurlshowoff} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price-and-quantity'>
          {quantity} x ${price}
        </span>
        <span>Size: {size}</span>
      </div>
      <div className='options'>
        <img
          onClick={clearItemHandler}
          className='delete'
          alt='delete-icon'
          src={deleteIcon}></img>
        <div className='increment-decrement-container'>
          <span onClick={increaseItemHandler} className='option'>
            +
          </span>
          <span onClick={removeItemHandler} className='option'>
            -
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
