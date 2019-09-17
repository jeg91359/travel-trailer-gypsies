//This is the Express app. It is imported into the Node Server (server.js)
//where it acts as a "listener".

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/users", (req, res, next) => {
  const user = req.body;
  console.log(user);
  res.status(201).json({
    message: "User added successfully!"
  });
});

app.get("/users", (req, res, next) => {
  const users = [
    {
      id: "kuhoiughn2211",
      name: "John Doe",
      email: "doe@gmail.com",
      password: "jd12345"
    },
    {
      id: "oiwdcoij39804ur90384",
      name: "Jane Smith",
      email: "smithj@gmail.com",
      password: "js1234"
    }
  ];
  res.status(200).json({
    message: "User list",
    users: users
  });
});

module.exports = app;
