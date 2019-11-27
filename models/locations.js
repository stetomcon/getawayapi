// DEPENDENCIES
const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  user: String,
  location: { type: String, required: true },
  sights: String,
  month: String,
  notes: String,
  restaurant: String,
  activities: String,
  budget: String,
  img: String
});

module.exports = mongoose.model("Location", locationSchema);
