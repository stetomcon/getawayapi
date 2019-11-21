// SERVER LOCAL DATABASE

const express = require('express')
const app = express()
const PORT = 3003
const mongoose = require('mongoose')
const cors = require('cors')

//CONTROLLERS
const locationController = require('./controllers/location.js')
const userController = require('./controllers/user.js')

const whitelist = ['http://localhost:3000', ''] // PLUG IN URL ONCE WE DEPLOY
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

//MIDDLEWARE
app.use(cors(corsOptions))

//JSON
app.use(express.json());

app.use('/location', locationController)
app.use('/user', userController)

//MONGOOSE CONNECTION ERRORS
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))


// MONGOOSE  CONNECTION
mongoose.connect('mongodb://localhost:27017/location', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('connected to mongoose...')
})

mongoose.connect('mongodb://localhost:27017/user', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('connected to mongoose...')
})

app.listen(PORT, () => {
    console.log('✈️☁️lets GetAway', PORT)
}) 