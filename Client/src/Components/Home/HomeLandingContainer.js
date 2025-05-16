import React from "react";
import girlHoldingADog from "./images/homepagelogo.png";
import footPrint from "./images/footPrint.png";
import paws from "./images/paws.png";
import { Link } from "react-router-dom";

const HomeLandingContainer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <img src={girlHoldingADog} alt="Girl holding a Dog" className="logo-img" />

        <div className="home-titlePlusPng">
          <p>Turning Paw Prints into Heartbeats</p>
          <img src={paws} alt="Dog sitting" />
        </div>

        <div className="adopt-btn">
          <Link to="./pets">
            <button className="Home-button" onClick={scrollToTop}>
              <p>Adopt now</p>
              <img src={footPrint} alt="footprint" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeLandingContainer;
