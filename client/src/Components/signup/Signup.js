import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import "./Signup.scss";
import { loginUser } from "../../actions/update-user";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    const registered = {
      userName: name,
      email: email,
      password: password,
    };

    axios.post("http://localhost:4000/app/signup", registered).then((res) => {
      if (res.data.message === "Sucessfully Registered") {
        dispatch(loginUser({ userName: name }));
        history.push("/");
      } else {
        alert(res.data.message);
      }
    });
  };

  return (
    <div className="signup">
      <span className="logo">
        <span>
          <img src={logo} alt=""></img>
        </span>

        <span
          className="Heading"
          onClick={() => {
            history.push("/");
          }}
        >
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
          <form onSubmit={formSubmit}>
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
