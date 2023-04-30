const express = require("express");

const feedbackRouter = require("./feedback");

const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
	res.json({
		message: "Welcome to api",
		success: true,
	});
});
router.use("/feedback", feedbackRouter);

module.exports = router;
