// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");

// DEPENDENCY VARIABLES
const app = express();
const PORT = 3003;

// CONTROLLER VARIABLES
const locationsController = require("./controllers/locations.js");
const usersController = require("./controllers/users.js");
const flightsController = require("./controllers/flights.js");

// CONNECTION VARS
// const whitelist = ["http://localhost:3000"];
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   }
// };

//MONGOOSE CONNECTION ERROR HANDLING
mongoose.connection.on("error", err =>
  console.log(err.message + " Mongo broke...")
);

// MONGOOSE DISCONNECT HANDLING
mongoose.connection.on("disconnected", () => {
  console.log("Mongo disconnected...");
});

// MONGOOSE CONNECT
mongoose.connect("mongodb://localhost:27017/locations", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// MONGOOSE CONNECTED
mongoose.connection.once("open", () => {
  console.log("Mongo connected....");
});

// MIDDLEWARE CONFIGURATION
// app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-TypeError, Accept"
  );
  next();
});

// CONTORLLER CONFIGURATION
app.use("/locations", locationsController);
app.use("/users", usersController);
app.use("/flights", flightsController);

// LISTEN
app.listen(PORT, () => {
  console.log("✈️ ☁️ lets GetAway", PORT);
});
