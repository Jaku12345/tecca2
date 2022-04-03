import React, { useState, useEffect } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item-component";

import "./checkout-component.styles.scss";

import { useSelector } from "react-redux";

import PaymentForm from "../../components/payment-form/payment-form.component";

function Checkout() {
  const categoriesState = useSelector((state) => {
    return state.cart;
  });

  const { cartItems } = categoriesState;

  const [totalItemCount, setTotalItemCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const totalSumOfItemQuantities = cartItems.reduce((sum, item) => {
      return item.quantity + sum;
    }, 0);

    const cartTotal = cartItems.reduce((sum, item) => {
      return item.quantity * item.price + sum;
    }, 0);

    setTotalItemCount(totalSumOfItemQuantities);
    setCartTotal(cartTotal);
  }, [cartItems]);

  return (
    <div>
      <div className='checkout-container'>
        <div className='checkout-header'>
          <div className='header-block'>
            <span>Product</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div>
        {cartItems?.map((cartItem, index) => {
          return <CheckoutItem key={index} cartItem={cartItem} />;
        })}

        {cartTotal === 0 ? (
          <p>No items in the cart!</p>
        ) : (
          <div className='checkout-footer'>
            <span className='total'>Total: ${cartTotal}</span>
            <PaymentForm />
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
