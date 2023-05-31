import express from "express";

import {
  getPackageBookings,
  addPackageBooking,
  deletePackageBooking,
} from "../controller/packageBookings.js";

const router = express.Router();

router.route("/")
.get(getPackageBookings)
.post(addPackageBooking)
.delete(deletePackageBooking);

export default router;
