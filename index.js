const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");

app.use(cors());

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const taskRoute = require("./routes/task");

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log("Connected to MongoDb");
	})
	.catch(() => {
		console.log("Error connecting to MongoDb");
	});

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/task", taskRoute);

app.listen(process.env.PORT || 5000, () => {
	console.log("Backend server is running");
});
