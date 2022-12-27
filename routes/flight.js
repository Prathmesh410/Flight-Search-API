const express = require('express');
const router = express.Router();
const {getFlightsDetails} = require("../controllers/flight")

router.get("/search", getFlightsDetails);

module.exports = router;