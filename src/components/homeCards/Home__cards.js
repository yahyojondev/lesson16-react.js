import React from "react";
import { NavLink } from "react-router-dom";
import { cardsproduct } from "../../static";
function Home__cards() {
  const carditem = cardsproduct?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.img} alt="" className="card__img" />
      <div className="card__content">
        <h4 className="card__title">{el.title}</h4>
        <img src={el.imgstars} alt="" className="card__stars" />
        <ul>
          <li className="price ">{el.price}</li>
          <li className="delprice">{el.delprice}</li>
          <li className="modtext">{el.modtext}</li>
        </ul>
      </div>
    </div>
  ));
  return (
    <div className="homeCards">
      <div className="container">
        <div className="homeCard__wrapper">
          <div>
            <h2>BEST SELLER</h2>
            <ul>
              <li>
                <NavLink className="homeCards__link">All</NavLink>
              </li>
              <li>
                <NavLink className="homeCards__link">Bags</NavLink>
              </li>
              <li>
                <NavLink className="homeCards__link">Sneakers</NavLink>
              </li>
              <li>
                <NavLink className="homeCards__link">Belt</NavLink>
              </li>
              <li>
                <NavLink className="homeCards__link">Sunglasses</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="homeCards__cards">{carditem}</div>
        <NavLink className="load__link">LOAD More</NavLink>
      </div>
    </div>
  );
}

export default Home__cards;
