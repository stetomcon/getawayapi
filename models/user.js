// USERSCHEMA

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    user: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String }
});


const user = mongoose.model('location', userSchema);

module.exports = user