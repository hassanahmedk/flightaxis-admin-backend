import mongoose from "mongoose";

const FlightSchema = new mongoose.Schema({
  airline: String,
  departure_date: String,
  leaving_from: String,
  going_to: String,
  flight_class: String,
  adult_fare: String,
  departure_time: String,
  infants_fare: String,
});

const FlightModel = mongoose.model("Flight", FlightSchema);

export default FlightModel;
