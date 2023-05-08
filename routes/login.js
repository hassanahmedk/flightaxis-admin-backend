import express from "express";

import { popDB, authorizeLogin } from "../controller/login.js"

const router = express.Router();


router.route("/")
.get(popDB)
.post(authorizeLogin);
// .post()
// .delete()
// .put();

export default router;



// have to authorizelogin