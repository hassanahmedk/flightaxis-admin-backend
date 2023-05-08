import express from "express";

import { getFlights, addFlight, editFlight, deleteFlight } from "../controller/flights.js";


const router = express.Router();


router.route("/")
.get(getFlights)
.post(addFlight)
.put(editFlight)
.delete(deleteFlight);

 
export default router;