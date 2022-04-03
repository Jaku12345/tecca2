import React, { useEffect, useState } from "react";

import Reviews from "../../components/reviews/reviews-component";
import WriteAReview from "../../components/write-a-review/write-a-review-component";
import Button from "../../components/button/button-component";

import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, setIsCartOpen } from "../../redux/features/cartSlice";

import { useNavigate } from "react-router";

import "./selected-item-styles.scss";

import { setSelectedCategory } from "../../redux/features/selectedCategoryPreviewSlice";

function SelectedItemPreview() {
  const databaseState = useSelector((state) => {
    return state.databaseData;
  });

  const { categoriesMap } = databaseState;

  const navigate = useNavigate();
  const [currentClickedSize, setCurrentClickedSize] = useState("");

  const [didUserPurchaseProducts, setDidUserPurchaseProducts] = useState(false);

  const dispatch = useDispatch();

  const [selectedPreviewItem, setSelectedPreviewItem] = useState({});
  let selectedItemCategory = "";
  let selectedItemId = 0;

  const [itemCategory, setItemCategory] = useState("");

  useEffect(() => {
    const itemPath = window.location.pathname;
    itemPath.split("/").forEach((element, index) => {
      if (index === 2) {
        selectedItemCategory = element;
        setItemCategory(selectedItemCategory);
      }
      if (index === 3) {
        selectedItemId = Number(element);
      }
    });

    const foundItem = categoriesMap[selectedItemCategory]?.find((item) => {
      if (item.id === selectedItemId) {
        return item;
      } else {
        return false;
      }
    });

    setSelectedPreviewItem(foundItem);
  }, [categoriesMap]);

  const userState = useSelector((state) => {
    return state.user;
  });

  const { currentUser } = userState;

  const addProductToCart = (product) => {
    if (currentClickedSize === "") {
      alert("Please select a size first!");
    } else {
      const result = { ...selectedPreviewItem, size: currentClickedSize };
      dispatch(addItemToCart(result));
      dispatch(
        setIsCartOpen({ displayCart: true, slideCartInFrom: "slide-in-left" })
      );
    }
  };

  const [userData, setUserData] = useState([]);

  const handleWriteReviewRendering = () => {
    if (currentUser.displayName !== "") {
      return <WriteAReview />;
    } else {
      return (
        <div className='selected-item-preview-write-a-review-footer'>
          <p>
            {`Only users who are signed in  can
          write reviews!`}
          </p>
          <p onClick={() => navigate(`/auth`)}>Sign in now</p>
        </div>
      );
    }
  };

  console.log("here");
  console.log(currentUser.displayName);

  const handleClickedSize = (clickedSize) => {
    setCurrentClickedSize(clickedSize);
  };

  return (
    <>
      <div key={selectedPreviewItem?.id} className='item-preview'>
        <div className='links-and-images-container'>
          <div className='navigation-links'>
            <p className='clickable-link' onClick={() => navigate(`/shop`)}>
              /shop
            </p>
            <p
              className='clickable-link'
              onClick={() => {
                navigate(`/shop/${itemCategory}`);
              }}>
              /{itemCategory}
            </p>
            <p className='unclicabble-link'>/{selectedPreviewItem?.name}</p>
          </div>
          <div className='images-container'>
            <div className='image'>
              <img
                className='main-image'
                alt={`${selectedPreviewItem?.name}`}
                src={selectedPreviewItem?.imageurlmain}></img>
            </div>
            <div className='image'>
              <img
                className='show-off-image'
                alt={`${selectedPreviewItem?.name}`}
                src={selectedPreviewItem?.imageurlshowoff}></img>
            </div>
            <div className='image'>
              <img
                className='aditional-image-first'
                alt={`${selectedPreviewItem?.name}`}
                src={selectedPreviewItem?.additionalimage1}></img>
            </div>
            <div className='image'>
              <img
                className='aditional-image-second'
                alt={`${selectedPreviewItem?.name}`}
                src={selectedPreviewItem?.additionalimage2}></img>
            </div>
          </div>
        </div>

        <div className='information-container'>
          <p className='name'>{selectedPreviewItem?.name}</p>
          <p className='price'>{selectedPreviewItem?.price}$</p>
          <span>Select a size</span>
          <div className='sizes-container'>
            {selectedPreviewItem?.sizes?.map((size) => {
              if (Number(size) === Number(currentClickedSize)) {
                return (
                  <p
                    className='size clicked'
                    key={size}
                    onClick={() => handleClickedSize(size)}>
                    {size}
                  </p>
                );
              } else {
                return (
                  <p
                    key={size}
                    onClick={() => handleClickedSize(size)}
                    className={`size`}>
                    {size}
                  </p>
                );
              }
            })}
          </div>

          <Button
            type='button'
            onClick={() => addProductToCart(selectedPreviewItem)}
            title='Add to bag'
            buttonType='signIn'>
            Add to bag
          </Button>
          <p className='details'>
            Model is 6′2″Wearing size 32x30 Slim fit 98% Organic Cotton, 2%
            Elastane Machine Wash Cold. Tumble Dry Low. Made at Hirdaramani
            Factory in Sri Lanka. Zipper fly Organic Cotton: This style uses
            GOTS-certified organic cotton. Organic cotton is better for the soil
            and water, and it’s safer for the workers.
          </p>
        </div>
      </div>
      <Reviews />

      {handleWriteReviewRendering()}
    </>
  );
}

export default SelectedItemPreview;
