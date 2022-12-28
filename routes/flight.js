const express = require('express');
const router = express.Router();
const {getAllFlights,getFlightsDetails} = require("../controllers/flight")

router.get("/flights", getAllFlights);
router.get("/flights/search", getFlightsDetails);

module.exports = router;