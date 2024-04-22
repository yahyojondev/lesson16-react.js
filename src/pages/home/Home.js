import React from "react";
import HomeHero from "../../components/homeHero/HomeHero";
import rasm1 from "../../assets/images/absoluteimg.svg";
import rasm2 from "../../assets/images/absoluteimg2.png";
import rasm3 from "../../assets/images/absoluteimg3.png";
import Home__cards from "../../components/homeCards/Home__cards";
import MenRunning from "../../components/menRunning/MenRunning";

function Home() {
  return (
    <div>
      <HomeHero />
      <div className="container">
        <div className="home__cardabsolute">
          <div className="home__card">
            <h4>FS - QUILTED MAXI CROSS BAG</h4>
            <div>
              <img src={rasm1} alt="" />
              <div className="price__wrapper">
                <span>$534,33</span>
                <p>24% Off</p>
              </div>
            </div>
            <h3>$299,43</h3>
          </div>
          <div className="home__card">
            <div className="titles">
              <h4>FS - QUILTED MAXI CROSS BAG</h4>
              <h3>$299,43</h3>
            </div>
            <div className="img__text">
              <img src={rasm2} alt="" />
              <div>
                <span>$534,33</span>
                <p>24% Off</p>
              </div>
            </div>
          </div>
          <div className="home__card">
            <div className="titles">
              <h4>FS - QUILTED MAXI CROSS BAG</h4>
              <div className="price__wrapper">
                <span>$534,33</span>
                <p>24% Off</p>
              </div>
            </div>
            <div>
              <img src={rasm3} alt="" />
            </div>
            <h3>$299,43</h3>
          </div>
        </div>
      </div>
      <Home__cards />
      <MenRunning />
    </div>
  );
}

export default Home;
