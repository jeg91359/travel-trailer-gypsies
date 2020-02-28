const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

//Register
router.post("/register", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      username: req.body.username,
      password: hash
    });
    user
      .save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          message: "Registration failed: this user already exists!"
        });
      });
  });
});

//Authenticate
router.post("/login", (req, res, next) => {
  let fetchedUser;
  User.findOne({ username: req.body.username })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Login failed: incorrect username and/or password!"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Login failed: incorrect username and/or password!"
        });
      }
      const token = jwt.sign(
        { username: fetchedUser.username, userId: fetchedUser._id },
        "secret_string_where_this_should_stay_secret",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Login failed!"
      });
    });
});

// The "get" code below isn't wired to the Angular code
// but I think it will be for fetching the avatar image
router.get("/users", (req, res, next) => {
  User.find().then(documents => {
    console.log(documents);
    res.status(200).json({
      message: "Users fetched successfully!",
      users: documents
    });
  });
});

// The "delete" code below isn't wired to the Angular code...
router.delete("/users/:id", (req, res, next) => {
  console.log(req.params.id);
  res.status(200).json({ message: "User deleted!" });
});

// Profile...this isn't wired up either...
router.get("/profile", (req, res, next) => {
  res.send("PROFILE");
});

module.exports = router;
