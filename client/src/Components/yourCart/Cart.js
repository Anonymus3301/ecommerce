import React from "react";
import "./Cart.scss";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";
import truck from "../../assets/truck.svg";

const Cart = () => {
  return (
    <div className="Cart">
      <div className="title">Your Cart</div>
      <div className="cart-items">
        <div className="item">
          <div className="image">
            <img src={image1} alt=""></img>
          </div>
          <div className="info">
            <div className="type">T-Shirt</div>
            <div className="name">
              <span>Summer Vibes</span>
              <span>$89.99</span>
            </div>
            <div className="id">#261311</div>
          </div>
        </div>
        <div className="item">
          <div className="image">
            <img src={image2} alt=""></img>
          </div>
          <div className="info">
            <div className="type">Basic Slim</div>
            <div className="name">
              <span>Fit T-Shirt</span>
              <span>$69.99</span>
            </div>
            <div className="id">#212315</div>
          </div>
        </div>
      </div>
      <div className="cost">
        <div className="in-cost">
          <span>Total Cost</span>
          <span>$159.98</span>
        </div>
      </div>
      <div className="free">
        <div className="image">
          <img src={truck} alt=""></img>
        </div>
        <div className="text">
          You are <span className="high">$30.02</span> away from free shipping
        </div>
      </div>
    </div>
  );
};

export default Cart;
