// DEPENDENCIES
const express = require("express");
const router = express.Router();
const Locations = require("../models/locations.js");

// GET - RETRIEVE DATA
router.get("/", (req, res) => {
  Locations.find({}, (err, foundLocations) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundLocations);
  });
});

// POST - CREATE NEW LOCATION
router.post("/", (req, res) => {
  Locations.create(req.body, (err, createdLocation) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).send(createdLocation);
  });
});

// DELETE - REMOVE LOCATION FROM DATABASE
router.delete("/:id", (req, res) => {
  Locations.findByIdAndRemove(req.params.id, (err, deletedLocation) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedLocation);
  });
});

// PUT - UPDATE LOCATION DETAILS
router.put("/:id", (req, res) => {
  Locations.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedLocation) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedLocation);
    }
  );
});

module.exports = router;
