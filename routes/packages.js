import express from "express";

import { getPackages, addPackage, editPackage, deletePackage } from "../controller/packages.js";


const router = express.Router();


router.route("/:package")
.get(getPackages)
.put(editPackage)

 
export default router;