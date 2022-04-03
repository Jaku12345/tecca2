import React, { useState } from "react";

import WishlistItem from "../../components/wishlist-item/wishlist-item-component";
import { useEffect } from "react";

import { getUserPurchasesData } from "../../utils/firebase.utils";
import { useSelector } from "react-redux";

import "./wishlist.styles.scss";

function Wishlist() {
  const userState = useSelector((state) => {
    return state.user;
  });

  const wishlistState = useSelector((state) => {
    return state.updateWishlistSlice;
  });

  const { isWishlistUpdated } = wishlistState;

  const [wishlistData, setWislistData] = useState();
  const { currentUser } = userState;
  console.log("here");
  console.log(isWishlistUpdated);

  useEffect(() => {
    if (currentUser.displayName !== "") {
      async function getData() {
        const result = await getUserPurchasesData(currentUser.uid);
        setWislistData(result);
      }
      getData();
    }
  }, [isWishlistUpdated, currentUser]);
  return (
    <div className='wishlist-container'>
      {wishlistData?.wishListItems.length === 0 ? (
        <p>You have no saved items.</p>
      ) : (
        <p>Saved Items</p>
      )}
      {wishlistData?.wishListItems?.map((wishlist, index) => {
        return <WishlistItem key={index} cartItem={wishlist} />;
      })}
    </div>
  );
}

export default Wishlist;
