const Flight = require("../models/flight")



exports.getAllFlights = (req,res) => {
  Flight.find((err,flights) =>{
    if(err){
      return res.status(400).json({
        error:"No flights found"
      })
    }
     res.send(flights)
  })
}



exports.getFlightsDetails = (req, res) => {
  const   {
    source,
    destination,
    direct_flight,
    departure_date,
    round_trip,
    return_date,
  } = req.body;

    
  // const {} = req.body;
  console.log(
    {source,
    destination,
    direct_flight,
    departure_date,
     round_trip,
    return_date,}
    );

    // console.log(destination == "");
    // console.log(departure_date == "");
    // console.log(arrival_time == "");
    // console.log(direct_flight == "");
    // console.log(round_trip == "");
    
    if(!source){
      return res.status(400).json({
        error:"please provide source"
      })
    }

    if(!destination ){
      return res.status(400).json({
        error:"please provide destination"
      })
    }

    if(!direct_flight ){
      return res.status(400).json({
        error:"please provide direct flight"
      })
    }

    if(!departure_date ){
      return res.status(400).json({
        error:"please provide departure date"
      })
    }

    if(!round_trip ){
      return res.status(400).json({
        error:"please provide round trip"
      })
    }

    if(round_trip==true) {
      if(!return_date ){
        return res.status(400).json({
          error:"please provide return date"
        })
      } 
    }

    let query;
    if(round_trip){
       query =  {origin :source,destination  ,departure_date,direct_flight,round_trip,return_date};
    }else{
      query =  {origin :source,destination  ,departure_date,direct_flight,round_trip};
    }
    
  
    console.log({ query});


  
  // console.log("inside find dunction");
    Flight.find(query,(err,flights) =>{
      if(err){
        return res.status(400).json({
          error:"No flights found"
        })
      }
       res.send(flights)
    })

  };



  