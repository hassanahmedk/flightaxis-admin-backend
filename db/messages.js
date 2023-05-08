import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  date: String,
});

const MessageModel = mongoose.model("Message", MessageSchema);

export default MessageModel;
