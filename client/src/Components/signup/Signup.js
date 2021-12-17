import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Signup.scss";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="signup">
      <span className="logo">
        <span>
          <img src={logo} alt=""></img>
        </span>
        <span>
          <span className="yellow">E-</span>Shop
        </span>
      </span>
      <div className="form-container">
        <div className="form">
          <div className="title">
            <div className="title-login">
              <Link to="/login">LOG IN</Link>
            </div>

            <div className="title-signup">SIGN UP</div>
          </div>
          <form>
            <div className="input-div">
              <label htmlFor="username">UserName</label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </div>
            <div className="input-div">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <div className="input-div">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
            </div>
            <button
              type="submit"
              disabled={name && email && password ? false : true}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
