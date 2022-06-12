import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
	res.send("hello from endpoint");
});
router.get("/register", (req, res) => {
	res.send("hello from endpoint");
});

export default router;
