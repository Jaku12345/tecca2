import { Routes, Route } from "react-router-dom";

import Headline from "./components/headline/headline-component";
import Navbar from "./components/navbar/navbar-component";
import Checkout from "./routes/checkout/checkout-component";
import { useLocation } from "react-router";

import "./App.css";
import HomePage from "./routes/home/home-component";
import Shop from "./routes/shop/shop-component";
import Authentication from "./routes/authentication/authentication-component";
import SelectedItemPreview from "./routes/selected-item-preview/selected-item-preview-component";
import SelectedCategoryPreview from "./routes/selected-category-preview/selected-category-preview.component";
import Wishlist from "./routes/wishlist/wishlist.component";
import BestSellers from "./routes/best-sellers/best-sellers.component";

import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import {
  setShirtsData,
  setSweatersData,
} from "./redux/features/setRetrievedData";

import { setReviewsData } from "./redux/features/setRetrievedData";

import { addUrlToHistory } from "./redux/features/historyUrlSlice";

import { setCurrentUser } from "./redux/features/userSlice";

import SHOP_DATA from "./shop-data";

import axios from "axios";

function App() {
  const dispatch = useDispatch();

  const [currentClientIp, setCurrentClientIp] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://geolocation-db.com/json/");

      setCurrentClientIp(res.data.IPv4);
    };

    getData();
  }, [currentClientIp]);

  //check if there's a user with the current user ip adress
  useEffect(() => {
    if (currentClientIp !== "") {
      console.log("So the ip is:");
      console.log(currentClientIp);

      fetch("http://localhost:3000/getSignedInUserData", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ip: currentClientIp,
        }),
      })
        .then((response) => response.json())
        .then((loggedInUsers) => {
          console.log("LOGGED IN USERS");
          console.log(loggedInUsers);
          let foundUser = false;
          if (loggedInUsers.length === 0) {
            dispatch(
              setCurrentUser({ ip: currentClientIp, displayName: "", uid: "" })
            );
            return;
          }

          loggedInUsers?.find((user, index) => {
            if (user.ip === currentClientIp) {
              console.log(" i should not see this");
              console.log(user.ip);
              console.log(currentClientIp);
              dispatch(setCurrentUser({ displayName: user.name, ip: user.ip }));
              foundUser = true;
            }
            if (foundUser === false) {
              console.log("so the current client ip is");
              console.log(currentClientIp);
              dispatch(setCurrentUser({ ip: currentClientIp }));
            }
          });
        });
    }
  }, [currentClientIp]);

  useEffect(() => {
    const getShirtsData = () => {
      fetch("http://localhost:3000/getShirts")
        .then((response) => response.json())
        .then((shirts) => {
          dispatch(setShirtsData(shirts));
        });
    };

    getShirtsData();

    const getSweatersData = () => {
      fetch("http://localhost:3000/getSweaters")
        .then((response) => response.json())
        .then((sweaters) => {
          dispatch(setSweatersData(sweaters));
        });
    };

    getSweatersData();
  }, []);

  useEffect(() => {
    const getReviewsData = () => {
      fetch("http://localhost:3000/getReviews")
        .then((response) => response.json())
        .then((reviews) => {
          dispatch(setReviewsData(reviews));
          console.log("REVIEWS HERE");
          console.log(reviews);
        });
    };

    getReviewsData();
  }, []);

  // useEffect(() => {
  //   onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //       const { displayName, uid } = user;
  //       dispatch(setCurrentUser({ displayName, uid }));
  //     } else {
  //       dispatch(setCurrentUser({}));
  //     }
  //   });
  // }, [dispatch]);

  const location = useLocation();

  useEffect(() => {
    dispatch(addUrlToHistory(location.pathname));
  }, [location.pathname]);

  return (
    <>
      <Headline />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route exact path='/shop' element={<Shop />} />
        <Route path='/shop/*' element={<SelectedCategoryPreview />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/item-preview/*' element={<SelectedItemPreview />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/best-sellers' element={<BestSellers />} />
      </Routes>
    </>
  );
}

export default App;
