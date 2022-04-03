import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import Button from "../button/button-component";

import CartItem from "../cart-item/cart-item-component";

import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../redux/features/cartSlice";

import "./cart-dropdown-styles.scss";

function CartDropDown() {
  const cartState = useSelector((state) => {
    return state.cart;
  });

  const { slideInAnimationDirection, cartItems } = cartState;

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

  let dispatch = useDispatch();

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  const hideShoppingCart = () => {
    dispatch(
      setIsCartOpen({ displayCart: true, slideCartInFrom: "slide-in-right" })
    );
  };

  return (
    <div className={`cart-dropdown-container ${slideInAnimationDirection}`}>
      <div className='header'>
        <p className='text'>Free standard shipping on your next order</p>
        <span onClick={hideShoppingCart} className='close-btn'>
          &#x2715;
        </span>
      </div>

      <h1>Your Cart</h1>
      <div className='items-and-checkout-container'>
        <div className='cart-items'>
          {cartItems?.map((item, index) => {
            return <CartItem key={index} cartItem={item} />;
          })}
        </div>
        {cartItems.length === 0 ? (
          <div>
            <p>Your shopping bag is empty.</p>
            <p>Not sure where to start?</p>
            <h2>Shop Best Sellers</h2>
          </div>
        ) : null}
        {cartItems.length !== 0 ? (
          <div className='footer'>
            <div className='footer-items-container'>
              <span>Subtotal ({totalItemCount} Items)</span>
              <p>{cartTotal}$</p>
              <Button
                onClick={() => {
                  goToCheckoutHandler();
                  dispatch(
                    setIsCartOpen({
                      displayCart: true,
                      slideCartInFrom: "slide-in-right",
                    })
                  );
                }}
                type='button'
                title='Continue to checkout'
                buttonType='signIn'
              />
              <p className='pst'>Psst, get it now before it sells out.</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CartDropDown;
