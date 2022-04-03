import React from "react";

import "./checkout-item-styles.scss";

import { useDispatch, useSelector } from "react-redux";

import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeCartItem,
} from "../../redux/features/cartSlice";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageurlshowoff, price, quantity, id, size } = cartItem;

  const dispatch = useDispatch();

  const clearItemHandler = () => dispatch(removeCartItem({ id, size }));
  const addItemHandler = () => dispatch(increaseItemQuantity({ id, size }));
  const removeItemHandler = () => dispatch(decreaseItemQuantity({ id, size }));

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageurlshowoff} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'> ${price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
