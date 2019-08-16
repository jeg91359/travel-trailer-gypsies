const express = require("express");

var app = express();

app.use('/users', (req, res, next) => {
    const users = [
      {
        id: "kuhoiughn2211",
        name: "John Doe",
        email: "doe@gmail.com",
        username: "jd123",
        password: "jd1234"
      },
      {
        id: "oiwdcoij39804ur90384",
        name: "Jane Smith",
        email: "smith@gmail.com",
        username: "js123",
        password: "js1234"
      }
    ];
    res.status(200).json({
        message: 'User list',
        users: users
    });
});

module.exports = app;