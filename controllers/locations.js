<<<<<<< HEAD
//LOCATION CONTROLLER

const express = require("express");
const router = express.Router();
const location = require("../models/location.js");

router.get("/", (req, res) => {
  location.find({}, (err, foundLocation) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundLocation);
  });
});

//CREATE
router.post("/", (req, res) => {
  location.create(req.body, (error, createdLocation) => {
    if (error) {
      res.status(400).json({ error: error.message });
=======
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
>>>>>>> b359e066fde00acba34686836d9e66ab1285de5a
    }
    res.status(200).send(createdLocation);
  });
});

<<<<<<< HEAD
//DELETE
router.delete("/:id", (req, res) => {
  location.findByIdAndRemove(req.params.id, (err, deletedLocation) => {
=======
// DELETE - REMOVE LOCATION FROM DATABASE
router.delete("/:id", (req, res) => {
  Locations.findByIdAndRemove(req.params.id, (err, deletedLocation) => {
>>>>>>> b359e066fde00acba34686836d9e66ab1285de5a
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedLocation);
  });
});

<<<<<<< HEAD
//UPDATE
router.put("/:id", (req, res) => {
  LocationSch.findByIdAndUpdate(
=======
// PUT - UPDATE LOCATION DETAILS
router.put("/:id", (req, res) => {
  Locations.findByIdAndUpdate(
>>>>>>> b359e066fde00acba34686836d9e66ab1285de5a
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

<<<<<<< HEAD
module.exports = location;
=======
module.exports = router;
>>>>>>> b359e066fde00acba34686836d9e66ab1285de5a
