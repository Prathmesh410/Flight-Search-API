const Flight = require("../models/flight")


exports.getFlightsDetails = (req, res) => {
  // const {
  //   flight_id,
  //   origin,
  //   destination,
  //   direct_flight,
  //   departure_date,
  //   round_trip,
  //   return_date,
  //   departure_time,
  //   arrival_time,
  //   airline,
  //   flight_number,
  //   price,
  //   seat_class
  // } = req.body;

  // const {} = req.body;
  
    // let query = {};


  console.log("inside find dunction");
    Flight.find().exec((err,flights)=>{
      if(err){
        return res.status(400).json({
          error:"No flights found"
        })
      }
      return res.json(flights);
    })

  };