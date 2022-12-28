const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require("mongoose")




//DB connection
const url = 'mongodb://localhost:27017/flights'; // URL to the local MongoDB server


//changed connnection
mongoose.connect(url).then(() => {
    console.log("Data Base")
})
.catch(()=> {
    console.log(error);
})

//middlewares
app.use(cors());


//routes
const flightRoutes = require("./routes/flight");


//routes
app.use(express.json());
app.use("/api",flightRoutes);


//PORT
const PORT = 8000;
//RUN server
app.listen(PORT, ()=>{
    console.log(`App running on ${PORT}`);
})

