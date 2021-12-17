import React from "react";
import "./Footer.scss";
import back from "../../assets/back.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="back">
        <img src={back} alt=""></img>
        <span className="text">Back</span>
      </div>
      <div className="payment">
        <div className="continue">CONTINUE SHOPPING</div>
        <div className="proceed">PROCEED TO PAYMENT</div>
      </div>
    </div>
  );
};

export default Footer;
