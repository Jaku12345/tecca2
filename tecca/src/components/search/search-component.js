import React from "react";

import "./search-styles.scss";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { setIsSearchOpen } from "../../redux/features/searchSlice";
import { updateSelectedItem } from "../../redux/features/selectedProductPreviewSlice";

import { setSelectedCategory } from "../../redux/features/selectedCategoryPreviewSlice";

function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchBarState = useSelector((state) => {
    return state.searchBar;
  });

  const { slideInAnimationDirection2 } = searchBarState;

  const categoriesState = useSelector((state) => {
    return state.databaseData;
  });
  const { categoriesMap } = categoriesState;

  const [searchInput, setSearchInput] = useState("");
  const [searchItemsToDisplay, setSearchItemsToDisplay] = useState([]);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    setSearchItemsToDisplay([]);
    for (const category in categoriesMap) {
      const filteredItems = categoriesMap[category].reduce((result, item) => {
        if (item.name.toLowerCase().includes(searchInput.toLowerCase())) {
          console.log(item);
          return [
            ...result,
            {
              ["name"]: item.name,
              ["image"]: item.imageUrlMain,
              ["category"]: category,
              ["id"]: item.id,
              ["sizes"]: item.sizes,
              ["imageUrlMain"]: item.imageUrlMain,
              ["imageUrlShowOff"]: item.imageUrlShowOff,
              ["additionalImage1"]: item.additionalImage1,
              ["additionalImage2"]: item.additionalImage2,
              ["price"]: item.price,
              ["category"]: item.category,
            },
          ];
        } else {
          return result;
        }
      }, []);
      if (filteredItems.length !== 0) {
        filteredItems.forEach((item) => {
          setSearchItemsToDisplay((searchItemsToDisplay) => [
            ...searchItemsToDisplay,
            item,
          ]);
        });
      }
    }
  }, [searchInput]);

  const navigateToSelectedCategoryPreview = (clickedCategory) => {
    navigate(`/shop/${clickedCategory}`);
    console.log(clickedCategory);
    dispatch(
      setIsSearchOpen({
        displaySearch: true,
        slideSearchInFrom: "slide-in-right",
      })
    );
    dispatch(setSelectedCategory(clickedCategory));
  };

  const navigateToSelectedItemPreview = (
    id,
    category,
    name,
    price,
    sizes,
    imageUrlMain,
    imageUrlShowOff,
    additionalImage1,
    additionalImage2
  ) => {
    console.log();
    console.log(id);
    dispatch(
      updateSelectedItem({
        id,
        name,
        price,
        sizes,
        imageUrlMain,
        imageUrlShowOff,
        additionalImage1,
        additionalImage2,
        category,
      })
    );
    dispatch(
      setIsSearchOpen({
        displaySearch: true,
        slideSearchInFrom: "slide-in-right",
      })
    );
    navigate(`/item-preview/${category}/${id}`);
    dispatch(setSelectedCategory(category));
  };

  const handleInputClear = () => {
    setSearchInput("");
  };

  return (
    <>
      <div className={`search-container ${slideInAnimationDirection2}`}>
        <div className='input-container'>
          <input
            value={searchInput}
            onChange={(event) => handleInputChange(event)}
            placeholder='Product, category...'></input>
        </div>

        {searchInput ? (
          <>
            <div className='categories'>
              <p>Categories</p>
              {Object.keys(categoriesMap).map((category) => {
                if (
                  category.toLowerCase().includes(searchInput.toLowerCase())
                ) {
                  return (
                    <p
                      className='categories-title'
                      key={category}
                      onClick={() => {
                        handleInputClear();
                        navigateToSelectedCategoryPreview(category);
                      }}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </p>
                  );
                }
              })}
            </div>
            <div className='items'>
              {searchItemsToDisplay?.slice(0, 4).map((item, index) => {
                console.log(item);
                return (
                  <div
                    onClick={() => {
                      handleInputClear();
                      navigateToSelectedItemPreview(
                        item.id,
                        item.category,
                        item.name,
                        item.price,
                        item.sizes,
                        item.imageUrlMain,
                        item.imageUrlShowOff,
                        item.additionalImage1,
                        item.additionalImage2,
                        item.category
                      );
                    }}
                    key={index}
                    className='item'>
                    <img alt='img' src={item.image}></img>
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default Search;
