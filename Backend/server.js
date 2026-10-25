const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mock data (no database)
const email = "test@zenvo.com";
const password = "123456";

// Login API (POST)
app.post("/api/login", function (req, res) {
  console.log(req.body.email);

  if (req.body.email === email && req.body.password === password) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.listen(5000, function () {
  console.log("Server started on http://localhost:5000");
});