import React, { useState, useEffect } from "react";

import "./cart-icon-styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { useSelector } from "react-redux";

function CartIcon() {
  const cartState = useSelector((state) => {
    return state.cart;
  });

  const { cartItems } = cartState;

  const [totalItemCount, setTotalItemCount] = useState(0);

  useEffect(() => {
    const totalSumOfItemQuantities = cartItems.reduce((sum, item) => {
      return item.quantity + sum;
    }, 0);

    setTotalItemCount(totalSumOfItemQuantities);
  }, [cartItems]);

  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{totalItemCount}</span>
    </div>
  );
}

export default CartIcon;
