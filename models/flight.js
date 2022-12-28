const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  flight_id: {
    type: Number,
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    // required: true
  },
  direct_flight: {
    type: Boolean,
    // required: true
  },
  departure_date: {
    type: String,
    required: true
  },
  round_trip: {
    type: Boolean,
    required: true
  },
  return_date: {
    type: String
  },
  departure_time: {
    type: String,
    required: true
  },
  arrival_time: {
    type: String,
    required: true
  },
  airline: {
    type: String,
    required: true
  },
  flight_number: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  seat_class: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Flight', flightSchema);