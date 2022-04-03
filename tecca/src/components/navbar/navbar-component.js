import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon-component";
import CartDropDown from "../cart-dropdown/cart-dropdown-component";

import logo from "../../assets/logo.svg";
import wishlistIcon from "../../assets/wishlist.svg";
import signInIcon from "../../assets/sign-in.svg";
import searchIcon from "../../assets/search.svg";
import closeIcon from "../../assets/close-icon.svg";

import "./navbar-component.styles.scss";

import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../redux/features/cartSlice";
import { setIsSearchOpen } from "../../redux/features/searchSlice";
import Search from "../search/search-component";
import { setCurrentUser } from "../../redux/features/userSlice";

function Navbar() {
  const cartState = useSelector((state) => {
    return state.cart;
  });

  const userState = useSelector((state) => {
    return state.user;
  });

  const searchState = useSelector((state) => {
    return state.searchBar;
  });

  let dispatch = useDispatch();

  const { isCartOpen, slideInAnimationDirection } = cartState;
  const { currentUser } = userState;
  const { renderSearch, slideInAnimationDirection2 } = searchState;
  const openShoppingCart = () => {
    dispatch(
      setIsCartOpen({ displayCart: true, slideCartInFrom: "slide-in-left" })
    );
  };

  const OpenSearchBar = () => {
    dispatch(
      setIsSearchOpen({
        displaySearch: true,
        slideSearchInFrom: "slide-in-left",
      })
    );
  };

  const signOutUser = () => {
    fetch("http://localhost:3000/signOutUser", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ip: currentUser.ip,
      }),
    }).then((user) => {
      dispatch(
        setCurrentUser({
          displayName: "",
          ip: currentUser.ip,
          uid: "",
        })
      );
    });
  };

  console.log(currentUser);

  return (
    <Fragment>
      <nav className='navbar'>
        <div className='navbar__left-side'>
          <Link className='link' to='/best-sellers'>
            Best sellers
          </Link>
          <Link className='link' to='/shop'>
            Shop
          </Link>
        </div>
        <Link to='/'>
          <img className='logo' alt='logo' src={logo}></img>
        </Link>

        <div className='navbar__right-side'>
          {slideInAnimationDirection2 === "slide-in-left" ? (
            <span
              onClick={() =>
                dispatch(
                  setIsSearchOpen({
                    displaySearch: true,
                    slideSearchInFrom: "slide-in-right",
                  })
                )
              }
              className='link'>
              <img
                onClick={OpenSearchBar}
                className='link-logo'
                alt='logo'
                src={closeIcon}></img>
              ` Close `
            </span>
          ) : (
            <span onClick={OpenSearchBar} className='link'>
              <img className='link-logo' alt='logo' src={searchIcon}></img>
              Search
            </span>
          )}
          {currentUser.displayName !== "" ? (
            <span className='link' onClick={signOutUser}>
              <img className='link-logo' alt='logo' src={signInIcon}></img>
              Sign out
            </span>
          ) : (
            <Link className='link' to='/auth'>
              <img className='link-logo' alt='logo' src={signInIcon}></img>
              Sign in
            </Link>
          )}
          {currentUser.displayName !== undefined ? (
            <Link className='link' to='/wishlist'>
              <img className='link-logo' alt='logo' src={wishlistIcon}></img>
              Wishlist
            </Link>
          ) : null}

          <div onClick={openShoppingCart} className='link'>
            <CartIcon />
            Shopping bag
          </div>
        </div>
        {isCartOpen && <CartDropDown />}
        {renderSearch === true ? <Search /> : null}
      </nav>
    </Fragment>
  );
}

export default Navbar;
