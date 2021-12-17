import React from "react";
import "./Payment.scss";
import paypal from "../../assets/paypal.png";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
import maestro from "../../assets/maestro.png";
import discover from "../../assets/discover.png";
import ideal from "../../assets/ideal.png";
import inpost from "../../assets/inpost.png";
import dpd from "../../assets/dpd.png";
import dhl from "../../assets/dhl.png";
import fedex from "../../assets/fedex.png";

const Payment = () => {
  return (
    <div className="Payment">
      <div className="payment-title">Payment Method</div>
      <div className="payment-method">
        <div className="method">
          <img src={paypal} alt=""></img>
        </div>
        <div className="method">
          <img src={visa} alt=""></img>
        </div>
        <div className="method">
          <img src={mastercard} alt=""></img>
        </div>
        <div className="method">
          <img src={maestro} alt=""></img>
        </div>
        <div className="method">
          <img src={discover} alt=""></img>
        </div>
        <div className="method">
          <img src={ideal} alt=""></img>
        </div>
      </div>
      <div className="delivery-title">Delivery Method</div>
      <div className="delivery-method">
        <div className="method">
          <img src={inpost} alt=""></img>
          <span>$20.00</span>
        </div>
        <div className="method">
          <img src={dpd} alt=""></img>
          <span>$12.00</span>
        </div>
        <div className="method">
          <img src={dhl} alt=""></img>
          <span>$15.00</span>
        </div>
        <div className="method">
          <img src={fedex} alt=""></img>
          <span>$10.00</span>
        </div>
      </div>
    </div>
  );
};

export default Payment;
