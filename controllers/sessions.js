const express = require("express");
const User = require("../models/users");
const bcrypt = require("bcrypt");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query);
  User.findOne(
    {
      email: req.query.username
    },
    (err, foundUser) => {
      if (bcrypt.compareSync(req.query.password, foundUser.password)) {
        res.status(200).json(foundUser);
        console.log("Found User");
      } else {
        console.log("User Not Found");
        res.status(400).json({ error: err.message });
      }
    }
  );
});

module.exports = router;
