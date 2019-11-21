// LOCATIONSCHEMA

const mongoose = require('mongoose')

const locationSchema = mongoose.Schema({
    user: String,
    location: { type: String, required: true },
    sights: [String],
    month: String,
    notes: [String],
    restaurant: [String],
    activities: [String],
    budget: { type: String, type: Number },
    img: { type: String, required: true },
});


const location = mongoose.model('location', locationSchema);

module.exports = location