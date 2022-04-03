import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../button/button-component";
import { useSelector } from "react-redux";

import { updateUserPurchases } from "../../utils/firebase.utils";
import { useNavigate } from "react-router-dom";

import "./payment-form.styles.scss";

const PaymentForm = () => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  const cartState = useSelector((state) => {
    return state.cart;
  });

  const { cartItems } = cartState;
  //used to enable users who purchased an item to write a review
  const [boughtItemIds, setBoughtItemIds] = useState([]);

  const userState = useSelector((state) => {
    return state.user;
  });

  const { currentUser } = userState;

  useEffect(() => {
    const cartTotal = cartItems.reduce((sum, item) => {
      return item.quantity * item.price + sum;
    }, 0);

    const allUniqueCartItemIds = cartItems.reduce((uniqueIds, item, index) => {
      if (index === 0) {
        uniqueIds.push(item.id);
      } else {
        if (!uniqueIds.includes(item.id)) {
          uniqueIds.push(item.id);
        }
      }

      return uniqueIds;
    }, []);

    setBoughtItemIds(allUniqueCartItemIds);
    setCartTotal(cartTotal);
  }, [cartItems]);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: cartTotal * 100 }),
    }).then((res) => {
      return res.json();
    });

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser.displayName,
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        updateUserPurchases(currentUser.uid, boughtItemIds);
        alert("Payment Successful!");
      }
    }
  };

  const navigateToSignInPage = () => {
    navigate(`/auth`);
  };

  return (
    <div className='payment-form-container'>
      {currentUser.displayName !== undefined ? (
        <form className='form' onSubmit={paymentHandler}>
          <p>Credit cart payment:</p>
          <CardElement className='payment' />
          <Button
            isLoading={isProcessingPayment}
            buttonType='signIn'
            type='submit'
            title='Pay now'></Button>
        </form>
      ) : (
        <div>
          <p>Only signed in users can purchase items. </p>
          <p onClick={navigateToSignInPage}>Sign in now</p>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
