import express from "express";

import { getPackages, addPackage, editPackage, deletePackage } from "../controller/packages.js";


const router = express.Router();


router.route("/")
.get(getPackages)
.post(addPackage)
.put(editPackage)
.delete(deletePackage);

 
export default router;