import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./product-cart-component.styles.scss";
import wishlistIcon from "../../assets/wishlist.svg";
import Button from "../button/button-component";

import { useDispatch } from "react-redux";
import { addItemToCart, setIsCartOpen } from "../../redux/features/cartSlice";

import { updateSelectedItem } from "../../redux/features/selectedProductPreviewSlice";
import { setSelectedCategory } from "../../redux/features/selectedCategoryPreviewSlice";

import { useSelector } from "react-redux";

import { updateUserWishlist } from "../../utils/firebase.utils";

function ProductCart({ product, category }) {
  const userState = useSelector((state) => {
    return state.user;
  });

  const { currentUser } = userState;

  const {
    name,
    price,
    imageurlshowoff,
    imageurlmain,
    id,
    sizes,
    additionalimage1,
    additionalimage2,
  } = product;

  let dispatch = useDispatch();

  const navigate = useNavigate();

  const displayCart = () =>
    dispatch(
      setIsCartOpen({ displayCart: true, slideCartInFrom: "slide-in-left" })
    );

  const addProductToCart = (size) => {
    const result = { ...product, size };

    dispatch(addItemToCart(result));
  };

  const handleNavigation = () => {
    dispatch(
      updateSelectedItem({
        id,
        name,
        price,
        sizes,
        imageurlmain,
        imageurlshowoff,
        additionalimage1,
        additionalimage2,
      })
    );
    navigate(`/item-preview/${category}/${id}`);
  };

  const [imageHover, setImageHover] = useState("");

  const addImageTransitionEffect = () => {
    if (imageHover === "change-image") {
      setImageHover("change-image2");
    } else {
      setImageHover("change-image");
    }
  };

  const addToWishList = async () => {
    console.log(currentUser.displayName);
    if (currentUser.displayName === undefined) {
      alert("Only signed in users can add wishlist items!");
    } else {
      alert(`${name} added to wishlist`);
      updateUserWishlist(currentUser.uid, product);
    }
  };

  return (
    <div className='product'>
      <div
        className={`images-and-its-elements-container ${imageHover}`}
        onMouseEnter={() => {
          addImageTransitionEffect();
        }}
        onMouseLeave={() => {
          addImageTransitionEffect();
        }}>
        <img
          className='main-image'
          alt='wishlist-logo'
          src={imageurlmain}></img>
        <img
          onClick={handleNavigation}
          className='hover-image'
          alt='wishlist-logo'
          src={imageurlshowoff}></img>

        <div onClick={addToWishList} className='wishlist-container'>
          <img className='logo' alt='wishlist-logo' src={wishlistIcon}></img>
        </div>

        <div className={`btn-container`}>
          <Button className={`btn`} title='Add to Bag'></Button>
          <div className={`sizes-container`}>
            {sizes?.map((size, index) => {
              return (
                <p
                  onClick={() => {
                    addProductToCart(size);
                    displayCart();
                  }}
                  key={index}>
                  {size}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div
        onClick={() => navigate(`/item-preview/${category}/${id}`)}
        className='product-info'>
        <p className='name'>{name}</p>
        <p className='price'>{price}$</p>
      </div>
    </div>
  );
}

export default ProductCart;
