import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/update-user";
import axios from "axios";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/app/login", { email, password })
      .then((res) => {
        if (res.data.message === "Login Successful") {
          dispatch(loginUser(res.data.user));
          history.push("/");
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
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
