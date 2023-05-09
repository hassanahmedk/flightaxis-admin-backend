import mongoose from "mongoose";

const FlightSchema = new mongoose.Schema({
  airline: String,
  leaving_from: String,
  going_to: String,
    months_fare:[
        {
            month:String,
            fare:String
        },
        {
            month:String,
            fare:String
        },
        {
            month:String,
            fare:String
        },
        {
            month:String,
            fare:String
        },
        {
            month:String,
            fare:String
        },
        {
            month:String,
            fare:String
        },
        {
            month:String,
            fare:String
        },{
            month:String,
            fare:String
        }
        ,{
            month:String,
            fare:String
        }
        ,{
            month:String,
            fare:String
        }
        ,{
            month:String,
            fare:String
        }
        ,{
            month:String,
            fare:String
        }
        
    ]
  
});

const FlightModel = mongoose.model("Flight", FlightSchema);

export default FlightModel;
