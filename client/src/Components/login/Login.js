import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const formSubmit = (e) => {
    history.push("/");
  };

  return (
    <div className="login">
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
            <div className="title-login">LOG IN</div>

            <div className="title-signup">
              <Link to="/signup">SIGN UP</Link>
            </div>
          </div>
          <form onSubmit={formSubmit}>
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
            <button type="submit" disabled={email && password ? false : true}>
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
