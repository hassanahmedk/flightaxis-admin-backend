import express from "express";

import { getMessages, addMessage, deleteMessage } from "../controller/messages.js";


const router = express.Router();


router.route("/")
.get(getMessages)
.post(addMessage)
.delete(deleteMessage);

 
export default router;