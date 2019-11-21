const express = require('express');
const router = express.Router();
const user = require('../models/user');
const bcrypt = require('bcrypt');


router.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    user.create(req.body, (err, createdUser) => {
        res.redirect('/');
    });
});

module.exports = router;