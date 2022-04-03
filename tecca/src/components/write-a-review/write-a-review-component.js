import React, { useState } from "react";
import { useParams } from "react-router";

import { createPost, getPosts } from "../../utils/firebase.utils.js";
import { auth } from "../../utils/firebase.utils.js";

import Button from "../button/button-component";
import "./write-a-review.styles.scss";

import { useDispatch, useSelector } from "react-redux";
import { updateReviewsComponent } from "../../redux/features/updateReviewsSlice.js";
import { updateReviewComponentAfterDeletePressed } from "../../redux/features/updateReviewsSlice.js";

function WriteAReview() {
  let dispatch = useDispatch();

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

  const [input, setInput] = useState({
    title: "",
    review: "",
  });

  const item = `${category}/${categoryId}`;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, review } = input;

    dispatch(updateReviewsComponent({ title, review, categoryId }));
    setInput({
      title: "",
      review: "",
    });

    dispatch(updateReviewComponentAfterDeletePressed(true));
  };

  return (
    <div className='write-a-review'>
      <form className='write-a-review__form' onSubmit={handleSubmit}>
        <h1>Write A Review</h1>
        <input
          onChange={handleChange}
          placeholder='review title..'
          name='title'
          value={input.title}
          required></input>

        <input
          onChange={handleChange}
          placeholder='write a review..'
          value={input.review}
          name='review'
          required></input>
        <Button title='Post review' buttonType='signIn' type='submit'>
          post review
        </Button>
      </form>
    </div>
  );
}

export default WriteAReview;
