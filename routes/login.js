import express from "express";

import {  authorizeLogin } from "../controller/login.js"

const router = express.Router();


router.route("/")
.post(authorizeLogin);
// .post()
// .delete()
// .put();

export default router;



// have to authorizelogin