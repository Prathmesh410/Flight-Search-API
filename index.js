const express = require('express');
const app = express();
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient;


app.use(cors());

//DB connection

const url = 'mongodb://localhost:27017'; // URL to the local MongoDB server

// Use connect method to connect to the server
MongoClient.connect(url,async function(err, client) {
    if (err) throw err;
    console.log("Connected successfully to server");
    // Select the database
    const flights = client.db("flights"); 
    await flights.find({}).toArray().then((result)=>{
        console.log(result);
        return result.json({result})
    }).catch(()=>{
        return resizeBy.json({
            error:"error"
        })
    });
})



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

