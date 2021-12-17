import React from "react";
import "./Head.scss";
import logo from "../../assets/logo.png";
import search from "../../assets/searchIcon.png";
import cart from "../../assets/cartIcon.png";
import user from "../../assets/userIcon.png";

const Head = () => {
  return (
    <div className="head">
      <span className="logo">
        <span>
          <img src={logo} alt=""></img>
        </span>
        <span>
          <span className="yellow">E-</span>Shop
        </span>
      </span>
      <span className="mid">
        <span>Men</span>
        <span>Women</span>
        <span>Kids</span>
      </span>
      <span className="icons">
        <img src={search} alt=""></img>
        <img src={cart} alt=""></img>
        <img src={user} alt=""></img>
      </span>
    </div>
  );
};

export default Head;
