import React from "react";
import { Routes, Route } from "react-router-dom";
import "./shop-component.styles.scss";
import CategoriesPreview from "../categories-preview/categories-preview-component";

function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
    </Routes>
  );
}

export default Shop;
