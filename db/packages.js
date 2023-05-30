import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema({
  airline: String,
  leaving_from: String,
  going_to: String,
  total_fare: String,
});

const PackageModel = mongoose.model("Package", PackageSchema);

export default PackageModel;
