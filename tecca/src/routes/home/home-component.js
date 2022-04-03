import React from "react";
import { useNavigate } from "react-router";

import Button from "../../components/button/button-component";

import "./home-component.styles.scss";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className='homepage'>
      <section className='main-content'>
        <span className='main-content__headline'>The Modern Essentials</span>
        <span className='main-content__headline'>
          Re-imagine modern day dressing. Shop the collection and all our best
          sellers.
        </span>
        <div className='main-content__buttons'>
          <Button
            onClick={() => navigate("/shop")}
            style={{ width: "200px" }}
            title='Shop Modern Essentials'
          />
          <Button
            onClick={() => navigate("/best-sellers")}
            style={{ width: "200px" }}
            title='Shop Best Sellers'
          />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
