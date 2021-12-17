import React from "react";
import cart from "../../assets/cartIcon.png";
import truck from "../../assets/truck.svg";
import line from "../../assets/line.svg";
import "./Head2.scss";

const Head2 = () => {
  return (
    <div className="Head2">
      <div className="title">Shipping and Payment</div>
      <div className="pic">
        <img className="cart" src={cart} alt=""></img>{" "}
        <img className="line" src={line} alt=""></img>
        <img className="line" src={line} alt=""></img>{" "}
        <img className="truck" src={truck} alt=""></img>
      </div>
    </div>
  );
};

export default Head2;
