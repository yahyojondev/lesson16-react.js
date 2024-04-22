import React from "react";
import logo from "../../assets/images/navbarlogo.svg";
import { Routers } from "../../static/index";
import { NavLink } from "react-router-dom";

function Navbarbotttom() {
  const navbarbottomitem = Routers?.map((el) => (
    <li key={el.id} className="navbarbottom__item">
      <NavLink to={el.path} className="navbarbottom__link">
        {el.title}
      </NavLink>
    </li>
  ));
  return (
    <div className="navbarbottom">
      <div className="container">
        <div className="navbarbottom__wrapper">
          <div>
            <img src={logo} alt="logo" />
            <p>E-comm</p>
          </div>
          <ul className="navbarbottom__list">{navbarbottomitem}</ul>
        </div>
      </div>
    </div>
  );
}

export default Navbarbotttom;
