import React, { Fragment, useEffect, useRef, useState } from "react";

import "./categories-preview.styles.scss";

import Button from "../../components/button/button-component";
import { useNavigate } from "react-router";

function CategoriesPreview() {
  const navigate = useNavigate();
  return (
    <div className='shop-page-container'>
      <div className='sweaters-container'>
        <h1>Sweaters</h1>
        <Button
          onClick={() => navigate(`/shop/sweaters`)}
          style={{ width: "200px", backgroundColor: "white", color: "black" }}
          title='Shop now'></Button>
      </div>
      <div className='shirts-container'>
        <h1>Shirts</h1>
        <Button
          onClick={() => navigate(`/shop/shirts`)}
          style={{ width: "200px", backgroundColor: "white", color: "black" }}
          title='Shop now'></Button>
      </div>
      <div className='jeans-container'>
        <h1>Jeans</h1>
        <Button
          onClick={() => navigate(`/shop/jeans`)}
          style={{ width: "200px", backgroundColor: "white", color: "black" }}
          title='Shop now'></Button>
      </div>
    </div>
  );
}

export default CategoriesPreview;
