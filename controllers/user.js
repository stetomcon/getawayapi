// USER CONTROLLER

const express = require('express')
const router = express.Router()
const user = require('../models/user.js')
const bcrypt = require('bcrypt');

//NEW USER
router.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (err, createdUser) => {
        res.redirect('/');
    });
});
module.exports = user