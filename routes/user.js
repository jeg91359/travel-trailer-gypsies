const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../backend/models/user");

//Register
router.post('/register', (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash
        });
        user.save().then(result => {
            res.status(201).json({
                message: 'User created!',
                result: result
            });
        }).catch(err => {
            res.status(500).json({
                error: err
            });
        });
    });
});

//Authenticate
router.post('/login', (req, res, next) => {
    let fetchedUser;
    User.findOne({ email: req.body.email })
        .then(user => {
        if (!user) {
            return res.status(401).json({
                message: "Auth failed!"
            });
        }
        fetchedUser = user;
        return bcrypt.compare(req.body.password, user.password);
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: "Auth failed!"
                });
            }
            const token = jwt.sign(
                { email: fetchedUser.email, userId: fetchedUser._id}, 
                 "secret_this_should_be_longer", 
                 {expiresIn: "1h" }
            );
            res.status(200).json({
                token: token
            });
        })
        .catch(err => {
            return res.status(401).json({
                message: "Auth failed!"
            });
        });  
});

router.get("/users", (req, res, next) => {
    User.find().then(documents => {
      console.log(documents);
      res.status(200).json({
        message: "Users fetched successfully!",
        users: documents
      });
    });
  });
  
  // The "Delete" code below isn't wired to the Angular code...
  router.delete("/users/:id", (req, res, next) => {
    console.log(req.params.id);
    res.status(200).json({ message: "User deleted!" });
  });

//Profile
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

module.exports = router;