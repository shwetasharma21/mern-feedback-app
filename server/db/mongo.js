const mongoose = require("mongoose");

const connectDB = () => {
	mongoose
		.connect(process.env.MONGODB_URI)
		.then(() => {
			console.log("Connected to mongo db");
		})
		.catch((err) => {
			console.log("Mongo error" + err.message);
		});
};
module.exports.connectDB = connectDB;
