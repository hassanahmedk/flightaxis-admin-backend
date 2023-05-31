import mongoose from "mongoose";

const PackageBookingSchema = new mongoose.Schema({
  airline: String,
  name: String,
  leaving_from: String,
  going_to: String,
  trip_type: String,  
  departing_on: String,
  returning_on: String,
  no_of_passengers: String,
  adults: Number,
  kids: Number,
  infants: Number,
  customer_email: String,
  customer_phone: String,
  total_fare: String,
  submitted_on: Date,
  side_notes: String,
});

const PackageBookingModel = mongoose.model("PackageBooking", PackageBookingSchema);

export default PackageBookingModel;
