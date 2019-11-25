const express = require("express");
const User = require("../models/users");
const bcrypt = require("bcrypt");
const router = express.Router();

// POST - CREATE USER
router.post("/", (req, res) => {
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );
  User.create(req.body, (err, createdUser) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(createdUser);
    console.log(createdUser);
  });
});

module.exports = router;
