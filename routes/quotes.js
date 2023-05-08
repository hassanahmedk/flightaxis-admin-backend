import express from "express";

import {
  getQuotes,
  addQuote,
  deleteQuote,
} from "../controller/quotes.js";

const router = express.Router();

router.route("/")
.get(getQuotes)
.post(addQuote)
.delete(deleteQuote);

export default router;
