import mongoose from "mongoose";

const QuotesSchema = new mongoose.Schema({
  airline: String,
  customerName: String,
  leaving_from: String,
  going_to: String,
  trip_type: String,
  departing_on: String,
  returning_on: String,
  no_of_passengers: String,
  adults: String,
  kids: String,
  infants: String,
  customer_email: String,
  customer_phone: String,
  total_fare: String,
  submittedOn: Date,
});

const QuotesModel = mongoose.model("Quote", QuotesSchema);

export default QuotesModel;




//{
//  "customerName": "Zack Mathews",
//  "leaving_from": "London, London Heathrow Arpt [LHR], United Kingdom",
//  "going_to": "London, London Heathrow Arpt [LHR], United Kingdom",
//  "trip_type": "Return",
//  "departing_on": "2023-06-13",
//  "returning_on": "2023-06-15",
//  "no_of_passengers": "2",
//  "adults": "1",
//  "kids": "1",
//  "infants": "0",
//  "customer_email": "jackdoe@gmail.com",
//  "customer_phone": "+442378545452",
//  "total_fare": "128",
//  "airline": "AirlineTrios",
//  "submittedOn": "2023-3-12"
//}