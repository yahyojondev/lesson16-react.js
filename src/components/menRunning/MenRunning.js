import React from "react";
import shop from "../../assets/images/shopimg.png";
import { NavLink } from "react-router-dom";

function MenRunning() {
  return (
    <div className="menRunning">
      <div className="container">
        <div className="menRunning__wrapper">
          <div className="menRunning__left">
            <h2>Adidas Men Running Sneakers</h2>
            <p>Performance and design. Taken right to the edge.</p>
            <NavLink className="shop__link">SHOP NOW</NavLink>
          </div>
          <img src={shop} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MenRunning;
