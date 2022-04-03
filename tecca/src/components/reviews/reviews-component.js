import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import Button from "../button/button-component";

import { createPost, getPosts } from "../../utils/firebase.utils.js";
import { auth } from "../../utils/firebase.utils.js";
import { deletePostField } from "../../utils/firebase.utils.js";
import "./reviews-styles.scss";
import { updateReviewComponentAfterDeletePressed } from "../../redux/features/updateReviewsSlice";
import { updateReviewsComponent } from "../../redux/features/updateReviewsSlice";

function Reviews() {
  const [data, setData] = useState([]);

  //get the review we just wrote
  const updateReviewsState = useSelector((state) => {
    return state.updateReviews;
  });

  const { postedReview, postReview } = updateReviewsState;

  // console.log("THE REVIEW WE JUST SUBMITED");
  // console.log(postedReview);

  const userState = useSelector((state) => {
    return state.user;
  });

  //get the review we just wrote

  const { currentUser } = userState;

  const [updateState, setUpdateState] = useState(0);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3000/getReviews");
      const getInitialResults = await response.json();

      const foundOne = getInitialResults?.filter((review) => {
        if (
          review.postTitle === postedReview.title &&
          review.postText === postedReview.review &&
          review.id === postedReview.id
        ) {
          return review;
        } else {
          return false;
        }
      });

      if (
        postedReview.title !== "" &&
        postedReview.title !== updateState &&
        foundOne.length === 0 &&
        postReview === true
      ) {
        try {
          const config = {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: currentUser.displayName,
              posttitle: postedReview.title,
              posttext: postedReview.review,
              createdat: new Date(),
              itemid: categoryId,
            }),
          };
          const response = await fetch(
            "http://localhost:3000/postReview",
            config
          );
          const response2 = await fetch("http://localhost:3000/getReviews");
          const result = await response2.json();

          setData(result);
          dispatch(updateReviewComponentAfterDeletePressed(false));

          if (response.ok) {
            return response;
          } else {
          }
        } catch (error) {}
      } else {
        setData(getInitialResults);
      }
    }
    getData();
  }, [postedReview]);

  let category = "";
  let categoryId = "";
  let addLettersToCategory = true;
  let getTheId = false;

  let id = useParams();

  const linkString = Object.values(id).toString();
  for (let index = 0; index < linkString.length; index++) {
    const letter = linkString[index];

    if (letter === "/") {
      addLettersToCategory = false;
      getTheId = true;
      continue;
    }

    if (addLettersToCategory) {
      category = category + letter;
    }

    if (getTheId) {
      categoryId = categoryId + letter;
    }
  }

  const dispatch = useDispatch();

  const deleteSelectedReview = async (createdAt) => {
    try {
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          createdat: createdAt,
        }),
      };
      const response = await fetch(
        "http://localhost:3000/deleteReview",
        config
      );

      if (response.ok) {
        const randomValue = Date.now();
        setUpdateState(randomValue);
        dispatch(
          updateReviewsComponent({
            title: randomValue,
            review: "",
            categoryId: categoryId,
          })
        );

        return response;
      } else {
      }
    } catch (error) {}
  };

  let noReviewsCurrently = false;

  return (
    <div className='reviews'>
      <div className='reviews-navbar'>
        <p>Ratings and reviews</p>
      </div>

      <div className='reviews-container'>
        {data?.map((item, index) => {
          console.log("HERE");
          console.log(item.itemid);
          console.log(categoryId);
          if (
            Number(item.itemid) === Number(categoryId) &&
            item.name === currentUser.displayName
          ) {
            console.log(" SHOULD NOT SEE THIS");
            noReviewsCurrently = true;
            return (
              <div key={index} className='review'>
                <p className='userName'>{item.name}</p>
                <div className='info'>
                  <div className='date-rating-container'>
                    <p className='upload-date'>{item.createdat}</p>
                  </div>
                  <h3>{item.posttitle}</h3>
                  <p className='review-text'>{item.posttext}</p>
                  <Button
                    style={{ height: "55px" }}
                    title='Delete review'
                    buttonType='signIn'
                    onClick={() => deleteSelectedReview(item.createdat)}>
                    Delete review
                  </Button>
                </div>
              </div>
            );
          } else if (Number(item.itemid) === Number(categoryId)) {
            noReviewsCurrently = true;
            console.log("I SHOULD SEE THIS");
            return (
              <div key={index} className='review'>
                <p className='userName'>{item.name}</p>
                <div className='info'>
                  <div className='date-rating-container'>
                    <p className='upload-date'>{item.createdat}</p>
                  </div>
                  <h3>{item.posttitle}</h3>
                  <p>{item.posttext}</p>
                </div>
              </div>
            );
          } else if (
            index === data.length - 1 &&
            noReviewsCurrently === false
          ) {
            console.log("no way i am seeing this");
            noReviewsCurrently = false;
            return (
              <p className='reviews-footer' key={index}>
                There currently are no reviews of this product. Be the first one
                to write a review!
              </p>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Reviews;
