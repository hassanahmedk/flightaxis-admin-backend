import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  fullName: String,
  username: String,
  email: String,
  password: String
});

const AdminModel = mongoose.model("Admin", AdminSchema);

export default AdminModel;
