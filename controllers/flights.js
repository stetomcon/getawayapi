const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios({
      method: "GET",
      url:
        "https://api.travelpayouts.com/v2/prices/latest?currency=usd&origin=NYC&destination=BJS&period_type=year&page=1&limit=30&show_to_affiliates=true&sorting=price&trip_class=0&token=b016441b32b41d8ee4e9e3dde7c62fab",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      mode: "cors"
    });
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
