import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbartop() {
  return (
    <div className="navbartop">
      <div className="container">
        <div className="navbartop__wrapper">
          <select name="" id="">
            <option value="">Language</option>
            <option value="">Eng</option>
            <option value="">Ru</option>
          </select>
          <ul className="navbartop__list">
            <li className="navbartop__item">
              <IoPersonOutline className="navbartop__icon " />
              <p>My profile</p>
            </li>
            <li className="navbartop__item">
              <FiShoppingCart className="navbartop__icon " />
            </li>
            <li className="navbartop__item">
              <p>items</p>
            </li>
            <li className="navbartop__item">
              <p>$0.00</p>
              <IoSearchSharp className="navbartop__icon" />
            </li>
            <li className="navbartop__item">
              <NavLink to={"/like"}>
                <FaRegHeart className="navbartop__icon" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbartop;
