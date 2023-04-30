const express = require("express");
const router = express.Router();

const Feedback = require("../db/model/Feedback");

router.post("/submitFeedback", async (req, res) => {
	const { feedback, rating } = req.body;
	if (!feedback || rating === undefined) {
		return res.status(400).json({
			message: "feedback or rating is missing",
			success: false,
		});
	}
	const record = new Feedback({ feedback, rating });
	await record.save();
	res.status(201).json({
		message: "Feedback submitted successfully",
		success: true,
		record,
	});
});

module.exports = router;
