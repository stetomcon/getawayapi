const express = require("express");
const User = require("../models/users");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/", (req, res) => {
  User.findOne(
    {
      username: req.body.username
    },
    (err, foundUser) => {
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        res.status(200).json(foundUser);
        console.log("Found User");
      } else {
        res.status(400).json({ error: err.message });
        console.log("User Not Found");
      }
    }
  );
});
