import express from "express";

import {
  getBookings,
  addBooking,
  deleteBooking,
} from "../controller/bookings.js";

const router = express.Router();

router.route("/")
.get(getBookings)
.post(addBooking)
.delete(deleteBooking);

export default router;
