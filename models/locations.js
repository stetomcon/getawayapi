// DEPENDENCIES
const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  user: String,
  location: { type: String, required: true },
  sights: [String],
  month: [Date],
  notes: [String],
  restaurant: [String],
  activities: [String],
  budget: { type: String, type: Number },
  img: String
});

module.exports = mongoose.model("Location", locationSchema);
