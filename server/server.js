const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const { connectDB } = require("./db/mongo");
const apiRouter = require("./routes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use("/api", apiRouter);

app.use(express.static(path.join(__dirname, "./", "../build")));
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "./", "../build", "index.html"));
});

connectDB();

app.listen(PORT, () => {
	console.log(`App is listening at port ${PORT}`);
});
