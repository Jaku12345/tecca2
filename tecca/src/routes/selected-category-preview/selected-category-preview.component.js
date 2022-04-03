import React, { useState } from "react";

import { useSelector } from "react-redux";
import ProductCart from "../../components/product-cart/product-cart-component";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Button from "../../components/button/button-component";

import "./selected-category-styles.scss";

function SelectedCategoryPreview() {
  const [displayFilters, setDisplayFilters] = useState(false);

  const [selectedSizeFilter, setSelectedSizeFilter] = useState("");
  const [selectedSortByPrice, setSelectedSortByPrice] = useState("");

  const navigate = useNavigate();

  const categoryDataState = useSelector((state) => {
    return state.databaseData;
  });

  const { categoriesMap } = categoryDataState;

  const renderSelectedCategory = (category) => {
    navigate(`/shop/${category}`);
  };
  let selectedItemCategory = "";
  let selectedItemId = 0;
  const [itemCategory, setItemCategory] = useState("");
  const [allSizes, setAllSizes] = useState([]);

  const categoryPath = window.location.pathname;
  useEffect(() => {
    const itemPath = window.location.pathname;
    itemPath.split("/").forEach((element, index) => {
      console.log(index);
      if (index === 2) {
        selectedItemCategory = element;
        setItemCategory(selectedItemCategory);
        console.log(itemCategory);
      }
      if (index === 3) {
        selectedItemId = Number(element);
      }
    });
    let sizesResult = [];
    categoriesMap[selectedItemCategory]?.forEach((element, i, a) => {
      element.sizes?.forEach((size) => {
        if (sizesResult?.includes(size)) {
          console.log("nope");
        } else {
          sizesResult.push(size);
        }
      });
    });
    setAllSizes(sizesResult);

    if (selectedSizeFilter !== "") {
      const result = categoriesMap[selectedItemCategory].filter((item) => {
        if (item.sizes?.includes(selectedSizeFilter)) {
          return true;
        } else {
          return false;
        }
      });
      setCategoriesData(result);
    } else {
      setCategoriesData(categoriesMap[selectedItemCategory]);
    }
  }, [categoryPath, selectedSizeFilter, categoriesMap]);

  const [categoriesData, setCategoriesData] = useState([]);

  const renderFilters = () => {
    setDisplayFilters(!displayFilters);
  };

  const filterProductsBySize = (size) => {
    setSelectedSizeFilter(size);
  };

  const removeSizeFiltering = (size) => {
    if (selectedSizeFilter === size) {
      setCategoriesData(categoriesMap[itemCategory]);
      setSelectedSizeFilter("");
    }
  };

  const handlePrices = (clickedOption) => {
    if (clickedOption === selectedSortByPrice) {
      setSelectedSortByPrice("");
      console.log(categoriesMap);
      setCategoriesData(categoriesMap[itemCategory]);

      return;
    }

    function lowestToHighest(a, b) {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    }
    function highestToLowest(a, b) {
      if (a.price > b.price) {
        return -1;
      }
      if (a.price < b.price) {
        return 1;
      }
      return 0;
    }

    if (clickedOption === "highestToLowest") {
      const arrayForSort = [...categoriesData];
      arrayForSort.sort(highestToLowest);
      setCategoriesData(arrayForSort);
    } else {
      const arrayForSort = [...categoriesData];
      arrayForSort.sort(lowestToHighest);
      setCategoriesData(arrayForSort);
    }

    setSelectedSortByPrice(clickedOption);
  };

  return (
    <div className='category-items-container'>
      <div className='categories'>
        <div className='navigation-links'>
          <p>/shop</p>
          <p>/{itemCategory}</p>
        </div>
        <h3>Categories</h3>
        {Object.keys(categoriesMap).map((category) => {
          if (itemCategory === category) {
            return (
              <p
                className='categories-title category-title-clicked'
                key={category}
                onClick={() => {
                  renderSelectedCategory(category);
                }}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </p>
            );
          } else {
            return (
              <p
                className='categories-title'
                key={category}
                onClick={() => {
                  renderSelectedCategory(category);
                }}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </p>
            );
          }
        })}
      </div>
      <div className='products-container'>
        <p className='category-title'>
          {itemCategory.charAt(0).toUpperCase() + itemCategory.slice(1)}
        </p>
        <Button
          onClick={renderFilters}
          style={{
            padding: "0em 2em",
            margin: "2em 0em",
            marginBottom: "1.3em",
            borderRadius: "0.3em",
            fontSize: "13px",
          }}
          title='Filters '
          buttonType='signIn'></Button>
        {displayFilters && (
          <div className='filters-container'>
            <div className='sizes-container'>
              <p>Size</p>
              <div className='sizes'>
                {allSizes.map((size, index) => {
                  if (size === selectedSizeFilter) {
                    return (
                      <p
                        className='clicked'
                        onClick={() => {
                          filterProductsBySize(size);
                          removeSizeFiltering(size);
                        }}
                        key={index}>
                        {size}
                      </p>
                    );
                  } else {
                    return (
                      <p
                        onClick={() => {
                          filterProductsBySize(size);
                          removeSizeFiltering(size);
                        }}
                        key={index}>
                        {size}
                      </p>
                    );
                  }
                })}
              </div>
            </div>
            <div className='prices-container'>
              <header className='price'>Price</header>
              <p
                className={
                  selectedSortByPrice === "highestToLowest"
                    ? "selected-price"
                    : null
                }
                onClick={() => handlePrices("highestToLowest")}>
                Highest to lowest
              </p>
              <p
                className={
                  selectedSortByPrice === "lowestToHighest"
                    ? "selected-price"
                    : null
                }
                onClick={() => handlePrices("lowestToHighest")}>
                Lowest to highest
              </p>
            </div>
          </div>
        )}

        <div className='products'>
          {categoriesData?.map((element) => {
            return (
              <ProductCart
                key={element.id}
                product={element}
                category={itemCategory}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SelectedCategoryPreview;
