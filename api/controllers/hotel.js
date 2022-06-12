import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
	const newHotel = new Hotel(req.body);
	try {
		const savedHotel = await newHotel.save();
		res.status(200).send(savedHotel);
	} catch (error) {
		next(error);
	}
};
export const updateHotel = async (req, res, next) => {
	try {
		try {
			const updatedHotel = await Hotel.findByIdAndUpdate(
				req.params.id,
				{ $set: req.body },
				{ new: true }
			);
			res.status(200).json(updatedHotel);
		} catch (err) {
			next(err);
		}
	} catch (error) {
		next(error);
	}
};
export const deleteHotel = async (req, res, next) => {
	try {
		const deletedHotel = await Hotel.findOneAndDelete(req.params.id);
		res.status(200).send("Hotel deleted.");
	} catch (error) {
		next(error);
	}
};
export const findHotel = async (req, res, next) => {
	try {
		const hotel = await Hotel.findById(req.params.id);
		res.status(200).send(hotel);
	} catch (error) {
		next(error);
	}
};
export const findHotels = async (req, res, next) => {
	try {
		const hotels = await Hotel.find();
		res.status(200).send(hotels);
	} catch (error) {
		next(error);
	}
};
