// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// DEPENDENCY CONFIGURATION
const app = express();
const PORT = 3003;

// CONTROLLER CONFIGURATION
const locationController = require("./controllers/location.js");
const userController = require("./controllers/user.js");
const flightsController = require("./controllers/flights.js");

// CONNECTION CONFIGURATION
const whitelist = ["http://localhost:3000", ""];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

// MIDDLEWARE
app.use(cors(corsOptions));
app.use(express.json());

app.use("/location", locationController);
app.use("/user", userController);
// app.use("/flights", flightsController);

//MONGOOSE CONNECTION ERROR HANDLING
mongoose.connection.on("error", err =>
  console.log(err.message + " is Mongod not running?")
);
// MONGOOSE DISCONNECT HANDLING
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

// MONGOOSE CONNECTION
mongoose.connect("mongodb://localhost:27017/location", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

// LISTEN
app.listen(PORT, () => {
  console.log("✈️☁️lets GetAway", PORT);
});
