//LOCATION CONTROLLER

const express = require('express')
const router = express.Router()
const location = require('../models/location.js')

router.get('/', (req, res) => {
    location.find({}, (err, foundLocation) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(foundLocation)
    })
})


//CREATE
router.post('/', (req, res) => {
    location.create(req.body, (error, createdLocation) => {
        if (error) {
            res.status(400).json({ error: error.message })
        }
        res.status(200).send(createdLocation)
    })
})

//DELETE
router.delete('/:id', (req, res) => {
    location.findByIdAndRemove(req.params.id, (err, deletedLocation) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(deletedLocation)
    })
})

//UPDATE
router.put('/:id', (req, res) => {
    LocationSch.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedLocation) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(updatedLocation)
    })
})

module.exports = location