import express from "express";

import { getPackages, addPackage, editPackage, deletePackage } from "../controller/packages.js";


const router = express.Router();


router.route("/:city")
.get(getPackages)

 
export default router;