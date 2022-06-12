import express from "express";
import {
	createHotel,
	deleteHotel,
	findHotel,
	findHotels,
	updateHotel,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
const router = express.Router();

//Create
router.post("/", createHotel);

//Update

router.put("/:id", updateHotel);

// delete

router.delete("/:id", deleteHotel);

// get one
router.get("/:id", findHotel);

//get all

router.get("/", findHotels);
export default router;
