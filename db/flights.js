import mongoose from "mongoose";

const FlightSchema = new mongoose.Schema({
  airline: String,
  leaving_from: String,
  going_to: String,
    months_fare:[
        {
            month:String,
            leaving_fare:String,
            returning_fare:String

        },
        {
            month:String,
            leaving_fare:String,
            returning_fare:String
        },
        {
            month:String,
            leaving_fare:String,
            returning_fare:String
        },
        {
            month:String,
            leaving_fare:String,
            returning_fare:String
        },
        {
            month:String,
            leaving_fare:String,
            returning_fare:String
        },
        {
            month:String,
            leaving_fare:String,
            returning_fare:String
        },
        {
            month:String,
            leaving_fare:String,
            returning_fare:String
        },{
            month:String,
            leaving_fare:String,
            returning_fare:String
        }
        ,{
            month:String,
            leaving_fare:String,
            returning_fare:String
        }
        ,{
            month:String,
            leaving_fare:String,
            returning_fare:String
        }
        ,{
            month:String,
            leaving_fare:String,
            returning_fare:String
        }
        ,{
            month:String,
            leaving_fare:String,
            returning_fare:String
        }
        
    ]
  
});

const FlightModel = mongoose.model("Flight", FlightSchema);

export default FlightModel;
