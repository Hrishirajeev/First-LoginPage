const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mock data (no database)
const email = "test@trendo.com";
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log("Server started on port " + PORT);
});