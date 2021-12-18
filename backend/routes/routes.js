const express = require("express");
const router = express.Router();
const User = require("../models/signupmodel");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(req.body.password, saltPassword);

  const { userName, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "Email already registered" });
    } else {
      const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
      });
      user
        .save()
        .then((data) => {
          res.send({ message: "Sucessfully Registered" });
        })
        .catch((err) => {
          res.send({ message: "Error in SignUp" });
        });
    }
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successful", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});

module.exports = router;
