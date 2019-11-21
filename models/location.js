// LOCATIONSCHEMA

const mongoose = require('mongoose')

const locationSchema = mongoose.Schema({
    user: { type: String },
    location: { type: String, required: true },
    sights: { type: String, maxlength: 7 },
    month: { type: String },
    notes: { type: String },
    restaurant: { type: String },
    activities: { type: String },
    budget: { type: String, type: Number },
    url: { type: String },
    img: { type: String, required: true },

});


const location = mongoose.model('location', locationSchema);

module.exports = location