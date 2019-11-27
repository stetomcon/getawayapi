const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let origin = req.query.origin;
    let destination = req.query.destination;
    const day = req.query.day;
    const month = req.query.month;
    const year = req.query.year;
    const citydata = await axios({
      method: "GET",
      url: "https://api.travelpayouts.com/data/en/cities.json",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      mode: "cors"
    });

    citydata.data.forEach(city => {
      if (city.name === origin) {
        origin = city.code;
      }
    });
    citydata.data.forEach(city => {
      if (city.name === destination) {
        destination = city.code;
      }
    });

    const response = await axios({
      method: "GET",
      url: `https://api.travelpayouts.com/v2/prices/latest?currency=usd&beginning_of_period=${year}-${month}-${day}&origin=${origin}&destination=${destination}&period_type=month&page=1&limit=10&show_to_affiliates=true&sorting=price&trip_class=0&token=b016441b32b41d8ee4e9e3dde7c62fab`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      mode: "cors"
    });
    res.status(200).json(response.data.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
