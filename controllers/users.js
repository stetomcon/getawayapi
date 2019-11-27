const express = require("express");
const User = require("../models/users");
const bcrypt = require("bcrypt");
const router = express.Router();

// CREATE SESSION
// router.get("/", (req, res) => {
//   User.find({}, (err, foundUser) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//     }
//     res.status(200).json(foundUser);
//   });
//   take req.body.username and pw
//   go into User model and check if username && pw matches

//   sent a key value to the frontend for authenticating
//   const response = {
//     user: foundUser.username,
//     valid: true
//   };

//   res.json(response);
// });

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
    console.log("SUCCESS: ", createdUser._id);
  });
});

module.exports = router;
