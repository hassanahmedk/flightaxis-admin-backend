import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import loginRoutes from "./routes/login.js"
import flightRoutes from "./routes/flights.js"
import bookingRoutes from "./routes/bookings.js"
import quoteRoutes from "./routes/quotes.js"
import messageRoutes from "./routes/messages.js"

const app = express();

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));


const port = process.env.PORT || 5000;


const mongodbURL = `mongodb+srv://umairm0110:flightaxis@cluster0.lj8iogo.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(
  
  mongodbURL, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


app.get("/", (req,res)=>{
    res.send("Working")
})

app.use('/login', loginRoutes);
app.use('/flights', flightRoutes);
app.use('/bookings', bookingRoutes);
app.use('/quotes', quoteRoutes);
app.use('/messages', messageRoutes);


app.listen(port, "0.0.0.0", function(){
    console.log("Server running at 5000");
});

export default app;